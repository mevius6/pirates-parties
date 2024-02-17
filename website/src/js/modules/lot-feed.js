import { gsap } from 'gsap';
import {
  createNode,
  createNodeWithClass,
  appendNode,
  selectAll,
  select,
} from '../utils';
import { getAllGoodsForHome } from './fetch-posts';

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

// class Card extends EventEmitter {
class LotCard {
  constructor(
    el,
    title,
    about,
    artistName,
    dateCreated,
    price,
    scale,
    artWidth,
    artHeight,
    ...responsiveImageArgs
  ) {
    this._initializeDOM(el);

    this._createResponsiveImage(...responsiveImageArgs, {LQIP: false});
    this._displayContent(
      title, about, artistName, dateCreated, price, scale, artWidth, artHeight);

    this.config = { isCompactView: true };
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

    this.DOM.artist = this.DOM.card.querySelector(
      '[itemprop=artist] > [itemprop=name]');
    this.DOM.w = this.DOM.card.querySelector('[itemprop=width]');
    this.DOM.h = this.DOM.card.querySelector('[itemprop=height]');
    this.DOM.f = this.DOM.card.querySelector('.format');
    this.DOM.price = this.DOM.card.querySelector('.card__price');

    this.DOM.date = this.DOM.card.querySelector('.card__date');
    this.DOM.cta = this.DOM.card.querySelector('.card__cta');
    this.DOM.id = this.DOM.card.parentNode.getAttribute('id') || undefined;
  }

  async _displayContent(
    title, about, artistName, dateCreated, price, scale, artWidth, artHeight) {
    this.DOM.title.textContent = `${title}`;
    this.DOM.body.textContent = `${about}`;

    // this.DOM.artist.textContent = `Автор: ${artistName}`;
    this.DOM.artist.textContent = `${artistName}`;
    this.DOM.w.textContent = artWidth;
    this.DOM.h.textContent = artHeight;
    this.DOM.f.textContent = scale;

    this.DOM.cta.textContent = 'Заказать';
    this.DOM.cta.href = '/#contact';

    // this.DOM.price.textContent = `${price} ₽`;
    this.DOM.price.textContent = price;
    // this.DOM.date.textContent = dateCreated;
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

    if ('loading' in HTMLImageElement.prototype) {
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

export default class LotFeed {
  constructor(el) {
    this.DOM = { el: el };
    this.cards = [];
    this.wrap = select('#goods');
    this.items = selectAll('.card', this.wrap);

    this._runAsyncFetch().then((v) => {
      v.map(async (lot, i) => {
        const {
          poster: {
            title,
            about,
            artistName,
            dateCreated,
            price,
            scale,
            width: artWidth,
            height: artHeight,
            lotImages: [{
              responsiveImage: {
                srcSet,
                webpSrcSet,
                src,
                width,
                height,
                alt,
                base64,
              }
            }]
          }
        } = lot;
        this.cards.push(new LotCard(
          this.items[i],
          title,
          about,
          artistName,
          dateCreated,
          price,
          scale,
          artWidth,
          artHeight,
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
  }

  async _runAsyncFetch() {
    // const allPosts = await Promise.map(getAllGoodsForHome(), async (v));
    const allGoodsLists = await getAllGoodsForHome();
    return allGoodsLists;
  }
}
