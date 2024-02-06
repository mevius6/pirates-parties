precision mediump float;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform sampler2D simplePlaneTexture;

    void main() {
        // apply our texture
        vec4 finalColor = texture2D(simplePlaneTexture, vTextureCoord);

        // fake shadows based on vertex position along Z axis
        finalColor.rgb -= clamp(-vVertexPosition.z, 0.0, 1.0);
        // fake lights based on vertex position along Z axis
        finalColor.rgb += clamp(vVertexPosition.z, 0.0, 1.0);

        // handling premultiplied alpha (useful if we were using a png with transparency)
        finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);

        gl_FragColor = finalColor;
    }
