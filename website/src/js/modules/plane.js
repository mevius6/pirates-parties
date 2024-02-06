/**
 * @fileoverview Basic plane with curtains.js
 *
 * ***
 *
 * **Additional ressources**
 * @see
 * curtain.js {@link [website](www.curtainsjs.com)} and {@link [repo](https://github.com/martinlaxenaire/curtainsjs)}
 * @see
 * Example of simple plane setup {@linkcode[source](https://github.com/martinlaxenaire/curtainsjs/blob/master/examples/simple-plane/js/simple.plane.setup.js)} and {@link[demo](https://www.curtainsjs.com/examples/simple-plane/index.html)}
 * @see
 * How {@link [creating WebGL effects](https://css-tricks.com/creating-webgl-effects-with-curtainsjs/)} and {@link [animate images and videos](https://css-tricks.com/animate-images-and-videos-with-curtains-js/)} tuts on CSS Tricks
 * @see {@linkcode Codepen [collection](https://codepen.io/collection/XEvPge/)}
 * @see
 * {@link [Dummy use of GLSL 3.0 shader syntax with curtains.js](https://codepen.io/martinlaxenaire/pen/QWqGBbR)}
 * @see
 * WebGL enhanced drag slider tutorial {@link [(part 3)](https://codepen.io/martinlaxenaire/post/webgl-enhanced-drag-slider-tutorial-with-curtains-js-part-3)}
 * @see
 * {@link [Articles](https://tympanus.net/codrops/tag/curtains-js/)} on Codrops
 */
// eslint-disable-next-line no-unused-vars
let overview;

// import {Curtains, Plane, Vec2, Vec3} from 'https://cdn.jsdelivr.net/npm/curtainsjs@8.1.3/src/index.mjs';

import { Curtains, Plane, Vec2 } from 'curtainsjs/src/index.mjs';
import { select } from '../utils';

// https://parceljs.org/languages/glsl/
// import vs from '../../shaders/shader.vert';
// import fs from '../../shaders/shader.frag';

window.addEventListener('load', async () => {
  // set up our WebGL context and append the canvas to our wrapper
  const curtains = new Curtains({
    container: 'canvas',
    watchScroll: false,
    // alpha: true,
    // limit pixel ratio for performance
    pixelRatio: Math.min(1.5, window.devicePixelRatio),
  });

  // track the mouse positions to send it to the shaders
  // const mousePosition = { x:0, y:0 };
  const mousePosition = new Vec2();
  // we will keep track of the last position in order
  // to calculate the movement strength/delta
  const mouseLastPosition = new Vec2();

  const deltas = {
    max: 0,
    applied: 0,
  };

  // handling errors
  curtains.onError(() => {
    document.body.classList.add('no-curtains');
  }).onContextLost(() => {
    // on context lost, try to restore the context
    curtains.restoreContext();
  });

  // get plane element
  // const planeElement = document.getElementsByClassName('plane')[0];
  const planeElement = select('.plane');

  const vs = `precision mediump float;

    // default mandatory variables
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    // our texture matrix uniform
    uniform mat4 basicPlaneTextureMatrix;

    // custom variables
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMousePosition;
    uniform float uMouseMoveStrength;

    void main() {

      vec3 vertexPosition = aVertexPosition;

      // get the distance between our vertex and the mouse position
      float distanceFromMouse = distance(uMousePosition, vec2(vertexPosition.x, vertexPosition.y));

      // calculate our wave effect
      float waveSinusoid = cos(5.0 * (distanceFromMouse - (uTime / 75.0)));

      // attenuate the effect based on mouse distance
      float distanceStrength = (0.4 / (distanceFromMouse + 0.4));

      // calculate our distortion effect
      float distortionEffect = distanceStrength * waveSinusoid * uMouseMoveStrength;

      // apply it to our vertex position
      vertexPosition.z += distortionEffect / 30.0;
      vertexPosition.x += (distortionEffect / 30.0 * (uResolution.x / uResolution.y) * (uMousePosition.x - vertexPosition.x));
      vertexPosition.y += distortionEffect / 30.0 * (uMousePosition.y - vertexPosition.y);

      gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

      // varyings
      vTextureCoord = (basicPlaneTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
      vVertexPosition = vertexPosition;
    }
  `;

  const fs = `precision mediump float;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform sampler2D basicPlaneTexture;

    void main() {
      // apply our texture
      vec4 finalColor = texture2D(basicPlaneTexture, vTextureCoord);

      // fake shadows based on vertex position along Z axis
      finalColor.rgb -= clamp(-vVertexPosition.z, 0.0, 1.0);
      // fake lights based on vertex position along Z axis
      finalColor.rgb += clamp(vVertexPosition.z, 0.0, 1.0);

      // handling premultiplied alpha (useful if we were using a png with transparency)
      finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);

      gl_FragColor = finalColor;
    }
  `;

  // set initial parameters (basic uniforms)
  const params = {
    // vertexShaderID: 'vert',
    // fragmentShaderID: 'frag',
    vertexShader: vs,
    fragmentShader: fs,
    widthSegments: 20,
    heightSegments: 20, // we now have 20*20*6 = 2400 vertices !
    uniforms: {
      resolution: {
        // resolution of our plane
        name: 'uResolution',
        type: '2f', // notice this is an length 2 array of floats
        value: [planeElement.clientWidth, planeElement.clientHeight],
      },
      time: {
        // time uniform that will be updated at each draw call
        name: 'uTime',
        type: '1f',
        value: 0,
      },
      mousePosition: {
        // our mouse position
        name: 'uMousePosition',
        type: '2f', // again an array of floats
        value: mousePosition,
      },
      mouseMoveStrength: {
        // the mouse move strength
        name: 'uMouseMoveStrength',
        type: '1f',
        value: 0,
      },
    },
  };

  // create plane mesh
  const basicPlane = new Plane(curtains, planeElement, params);

  // if there has been an error during init, basicPlane will be null
  basicPlane
    .onReady(() => {
      // set a fov of 35 to reduce perspective
      // (we could have used the fov init parameter)
      basicPlane.setPerspective(35);

      // apply a little effect once everything is ready
      deltas.max = 2;

      // now that our plane is ready we can listen to mouse move event
      const wrapper = document.getElementById('hero');

      wrapper.addEventListener('mousemove', (e) => {
        handleMovement(e, basicPlane);
      });

      wrapper.addEventListener('touchmove', (e) => {
        handleMovement(e, basicPlane);
      }, {
        passive: true,
      });
    })
    .onRender(() => {
      // increment our time uniform
      basicPlane.uniforms.time.value++;

      // decrease both deltas by damping :
      // if the user doesn't move the mouse, effect will fade away
      deltas.applied += (deltas.max - deltas.applied) * 0.02;
      deltas.max += (0 - deltas.max) * 0.01;

      // send the new mouse move strength value
      basicPlane.uniforms.mouseMoveStrength.value = deltas.applied;
    })
    .onAfterResize(() => {
      const planeBoundingRect = basicPlane.getBoundingRect();
      basicPlane.uniforms.resolution.value = [
        planeBoundingRect.width,
        planeBoundingRect.height,
      ];
    })
    .onError(() => {
      // we will add a class to the document body to display original images
      document.body.classList.add('no-curtains');
    });

  // handle the mouse move event
  function handleMovement(e, plane) {
    // update mouse last pos
    mouseLastPosition.copy(mousePosition);

    const mouse = new Vec2();

    // touch event
    if (e.targetTouches) {
      mouse.set(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    }
    // mouse event
    else {
      mouse.set(e.clientX, e.clientY);
    }

    // lerp the mouse position a bit to smoothen the overall effect
    mousePosition.set(
      curtains.lerp(mousePosition.x, mouse.x, 0.3),
      curtains.lerp(mousePosition.y, mouse.y, 0.3)
    );

    // convert our mouse/touch position to coordinates
    // relative to the vertices of the plane and update our uniform
    plane.uniforms.mousePosition.value =
      plane.mouseToPlaneCoords(mousePosition);

    // calculate the mouse move strength
    if (mouseLastPosition.x && mouseLastPosition.y) {
      let delta =
        Math.sqrt(
          Math.pow(mousePosition.x - mouseLastPosition.x, 2) +
            Math.pow(mousePosition.y - mouseLastPosition.y, 2)
        ) / 30;
      delta = Math.min(4, delta);
      // update max delta only if it increased
      if (delta >= deltas.max) {
        deltas.max = delta;
      }
    }
  }
});
