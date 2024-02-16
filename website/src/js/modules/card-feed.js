/* eslint-disable no-unused-vars */
// https://www.w3.org/WAI/ARIA/apg/patterns/feed/

import { gsap } from 'gsap';
// import { EventEmitter } from 'events';
import {
  animationObserver,
  createNode,
  createNodeWithClass,
  appendNode,
  selectAll,
  delay,
  select,
} from '../utils';
import { getAllPostsForHome } from './fetch-posts';

const BLOG_HOST = 'journal.piratykaspiyskogo.online';

// eslint-disable-next-line no-unused-vars
const responsiveImageArgs = [
  'srcSet',
  'webpSrcSet',
  'src',
  'width',
  'height',
  'alt',
  'base64'
];

const dateOptions = {
  // weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
};

const timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

const formatter = new Intl.DateTimeFormat('ru', {
  ...dateOptions,
  ...timeOptions,
});

// class Card extends EventEmitter {
class Card {
  constructor(
    el,
    title,
    excerpt,
    date,
    slug,
    ...responsiveImageArgs
  ) {
    // super();
    this._initializeDOM(el);

    this._createResponsiveImage(...responsiveImageArgs, {LQIP: false});
    this._displayContent(title, excerpt, date, slug);

    this.config = { isCompactView: true };

    // this._createTimeline();
    // this._initializeEvents();
    // this._listen();
  }

  _initializeDOM(el) {
    this.DOM = { card: el };
    this.DOM.content = this.DOM.card.querySelector('.card__slide');
    this.DOM.imageWrapper = this.DOM.card.querySelector('.card__image-wrapper');
    appendNode(
      this.DOM.imageWrapper,
      createNodeWithClass('picture', 'card__image')
    );
    this.DOM.image = this.DOM.card.querySelector('.card__image');
    this.DOM.textWrapper = this.DOM.card.querySelector('.card__text-wrapper');
    this.DOM.title = this.DOM.card.querySelector('.card__headline');
    this.DOM.body = this.DOM.card.querySelector('.card__body');
    this.DOM.date = this.DOM.card.querySelector('.card__date');
    this.DOM.cta = this.DOM.card.querySelector('.card__cta');
    this.DOM.id = this.DOM.card.parentNode.getAttribute('id') || undefined;
  }

  async _displayContent(title, excerpt, date, slug) {
    this.DOM.title.textContent = title;
    this.DOM.body.textContent = excerpt;
    this.DOM.cta.href = `https://${BLOG_HOST}/posts/${slug}`;
    this.DOM.cta.target = '_blank';
    this.DOM.cta.rel = 'noopener';

    let dateObj = new Date(date);
    let dateStr = dateObj.toLocaleDateString('ru', dateOptions);

    this.DOM.date.dateTime = formatter.format(dateObj);
    this.DOM.date.textContent = dateStr;
  }

  async _createResponsiveImage(
    srcSet,
    webpSrcSet,
    src,
    width,
    height,
    alt,
    base64,
    vars = {}
  ) {
    let source1 = createNode('source');
    source1.srcset = webpSrcSet;
    source1.type = 'image/webp';

    let source2 = createNode('source');
    source2.srcset = srcSet;
    source2.type = 'image/jpeg';

    let img = new Image();
    img.alt = alt || '...';
    img.src = `url('${src}')`;
    img.width = width;
    img.height = height;
    img.loading = 'lazy';
    img.decoding = 'async';

    let inViewport = this.DOM.card.parentNode.classList.contains('--in-view');

    if ('loading' in HTMLImageElement.prototype && inViewport) {
      img.onload = () => this._revealImage();
    } else {
      // https://caniuse.com/loading-lazy-attr
      vars.LQIP = true;
    }

    if (vars.LQIP) {
      this.DOM.imageWrapper.style.backgroundImage = `url('${base64}')`;
      img.onload = () => {
        img.animate({ opacity: [0, 1] }, {
          fill: 'forwards',
          duration: 700,
          easing: 'ease-out',
        });
      }
    }

    appendNode(this.DOM.image, source1);
    appendNode(this.DOM.image, source2);
    appendNode(this.DOM.image, img);
  }

  _revealImage() {
    let tl = gsap.timeline({ defaults: {ease: 'power2.out'} });
    tl
      .from(this.DOM.imageWrapper, {
        xPercent: -100,
        autoAlpha: 0,
      })
      .from(this.DOM.image, {
        xPercent: 100,
        scale: 1.3,
      }, '<');
    return tl;
  }
}

// TODO
class ProductCard extends Card {
  constructor(
    el,
    title,
    about,
    artistName,
    dateCreated,
    price,
    ...responsiveImageArgs
  ) {
    super(el);
    // this._initializeDOM(el);
    // this._createResponsiveImage(...responsiveImageArgs, {LQIP: false});
    this._displayContent(title, about, artistName, dateCreated, price);
  }
}

// ? https://w3c.github.io/aria-practices/#feed
export default class CardFeed {
  constructor(el) {
    this.DOM = { el: el };
    this.cards = [];
    this.wrap = select('#posts');
    this.items = selectAll('.card', this.wrap);

    // this._observe(this.items);
    // let inViewport = this.items[0].classList.contains('js-anim--running');

    this.hasIntersected = new Set();

    this._runAsyncFetch().then((v) => {
      v.map(async (post, i) => {
        const {
          title,
          excerpt,
          date,
          slug,
          coverImage: {
            responsiveImage: {
              srcSet,
              webpSrcSet,
              src,
              width,
              height,
              alt,
              base64,
            }
          }
        } = post;
        this.cards.push(new Card(
          this.items[i],
          title,
          excerpt,
          date,
          slug,
          srcSet,
          webpSrcSet,
          src,
          width,
          height,
          alt,
          base64,
        ));
      });
    }).catch(error => error.message);

    this._createObservers();
    this._listen();
  }

  async _createObservers() {
    this.feed_observer = new IntersectionObserver(
      (observations) => {
        for (let observation of observations) {
          this.hasIntersected.add(observation);

          // toggle --in-view class if intersecting or not
          observation.target.parentNode.classList.toggle(
            '--in-view',
            observation.isIntersecting
          );
        }
      },
      {
        root: this.DOM.el,
        threshold: 0.6,
      }
    );
  }

  async _listen() {
    // observe children intersection
    for (let item of this.items) {
      this.feed_observer.observe(item);
    }
  }

  // async _observe(items) {
  //   for (const element of items) {
  //     animationObserver.observe(element, {
  //       root: this.DOM,
  //       rootMargin: '0px',
  //       threshold: [1.0],
  //       trackVisibility: true,
  //       delay: 100
  //     });
  //   }
  // }

  async _runAsyncFetch() {
    // const allPosts = await Promise.map(getAllPostsForHome(), async (v));
    const allPosts = await getAllPostsForHome();
    return allPosts;
  }
}
