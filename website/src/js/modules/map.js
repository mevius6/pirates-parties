import L from './leaflet';
import { selectAll } from '../utils';

// TODO: Использовать Mapbox Directions API и Geolocation API,
// для построения маршрута (альтернатива Google Maps).
// https://leafletjs.com/examples/mobile/
// https://leafletjs.com/reference-1.7.1.html#map-locate
// https://docs.mapbox.com/help/tutorials/getting-started-directions-api/

const root = document.documentElement;

/* eslint-disable no-unused-vars */

const accent = '#f96f27';

const ICON_GRADIENT = `<linearGradient id="Grad" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45)">
  <stop offset="0%" stop-color="${accent}" />
  <stop offset="100%" stop-color="${accent}" />
</linearGradient>`;

const URL_GRAD = `url(#Grad)`;

const setStyleById = (id='') => `<style>
  #${id} { fill: #FF6F1E }

  @media (prefers-color-scheme: dark) {
    #${id} { fill: #EDFF01 }
  }
</style>`;

// https://icon-sets.iconify.design/material-symbols/anchor/
const ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
  <path fill="currentColor" d="M12 22q-1.525 0-3.125-.55t-2.9-1.5q-1.3-.95-2.137-2.225T3 15v-3l4 3l-1.55 1.55q.725 1.275 2.3 2.2T11 19.925V11H8V9h3V7.825q-.875-.325-1.437-1.088T9 5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5q0 .975-.562 1.738T13 7.825V9h3v2h-3v8.925q1.675-.25 3.25-1.175t2.3-2.2L17 15l4-3v3q0 1.45-.837 2.725t-2.138 2.225q-1.3.95-2.9 1.5T12 22m0-16q.425 0 .713-.287T13 5q0-.425-.288-.712T12 4q-.425 0-.712.288T11 5q0 .425.288.713T12 6"/>
</svg>`;

const ICON_ZOOM_IN = `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline"><defs>${ICON_GRADIENT}</defs>
  <path id="zoomIn" fill="currentColor" d="M319.8 204v8c0 6.6-5.4 12-12 12h-84v84c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-84h-84c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h84v-84c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12zm188.5 293L497 508.3c-4.7 4.7-12.3 4.7-17 0l-129-129c-2.3-2.3-3.5-5.3-3.5-8.5v-8.5C310.6 395.7 261.7 416 208 416 93.8 416 1.5 324.9 0 210.7-1.5 93.7 93.7-1.5 210.7 0 324.9 1.5 416 93.8 416 208c0 53.7-20.3 102.6-53.7 139.5h8.5c3.2 0 6.2 1.3 8.5 3.5l129 129c4.7 4.7 4.7 12.3 0 17zM384 208c0-97.3-78.7-176-176-176S32 110.7 32 208s78.7 176 176 176 176-78.7 176-176z"></path>
</svg>`;

const ICON_ZOOM_OUT = `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline"><defs>${ICON_GRADIENT}</defs>
  <path fill="currentColor" d="M307.8 223.8h-200c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zM508.3 497L497 508.3c-4.7 4.7-12.3 4.7-17 0l-129-129c-2.3-2.3-3.5-5.3-3.5-8.5v-8.5C310.6 395.7 261.7 416 208 416 93.8 416 1.5 324.9 0 210.7-1.5 93.7 93.7-1.5 210.7 0 324.9 1.5 416 93.8 416 208c0 53.7-20.3 102.6-53.7 139.5h8.5c3.2 0 6.2 1.3 8.5 3.5l129 129c4.7 4.7 4.7 12.3 0 17zM384 208c0-97.3-78.7-176-176-176S32 110.7 32 208s78.7 176 176 176 176-78.7 176-176z"></path>
</svg>`;

// Add icon for metro/underground stations
const ICON_METRO = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 11.8L4.5 2 8 7.5 11.5 2l3.5 9.8h1V13h-5v-1.2h.5l-1-2.27L8 13 5.5 9.53l-1 2.27H5V13H0v-1.2h1z" fill="#FF4D4D"></path></svg>`

const ATTR = 'Данные карты &copy; <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">Участники OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">CC-BY-SA</a>, Векторные данные &copy; <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer">Mapbox</a>';

const NAMES = [
  'Загородная локация',
  'Локация в центре города',
];

const DARK_STYLE_ID = 'cllsgvh80009g01r4781i6b1h';
const LIGHT_STYLE_ID = 'clo78rac000wy01pfg9tshzjf';

// https://studio.mapbox.com/styles/mevius6/cllnq93hk001k01r71y6w9u8j/edit/#13/55.753960/37.620393
// const CITY_COORDS = L.latLng(55.753960, 37.620393);
const BOUND_COORDS = L.latLng(55.9912, 37.5667);

// https://schema.org/OpeningHoursSpecification
const addOpens = (days='Mo-Su', time) => `
  <span>
    <b>Открыто:</b>
    <time datetime="${days} ${time}">
      ${time}
    </time>
  </span>
`;

// https://schema.org/ContactPoint
const addContact = (telephone) => `
  <span>
    <b>Контакты:</b>
    <span>
      <a href="tel:+7${telephone.replace(/[^\d+]/g, '')}">${telephone}</a>
    </span>
  </span>
`;

// https://learn.javascript.ru/template-element
// https://gomakethings.com/html-templates-with-vanilla-javascript/
const loopItems = (arr) => {
  let item = '';
  for (let i of arr) {
    item += `<li class="item"><span data-icon></span>${i}</li>`;
  }
  // let list = `<ul>${item}</ul`;
  return item;
}

const addData = (name, desc, adds, metro=[], opens, telephone, direction) => `
  <div class="flow">
    <!--h4 class="headline" itemprop="name" data-hidden>${name}</h4>
    <span itemprop="description" data-hidden>${desc}</span-->
    <span>${adds}, Москва</span>
  </div>
  <div class="flow">
    <strong>Ближайшие станции<br /></strong>
    <ul>${loopItems(metro)}</ul>
  </div>
  <a itemprop="hasMap" class="direction" href="${direction}" target="_blank" rel="noopener noreferrer"><span>Проложить маршрут</span></a>
`;

// const dummylocation = {
//   data: () => addData(
//     NAMES[0],
//     '',
//     'Болотная набережная, 15, к1',
//     ['Кропоткинская', 'Третьяковская'],
//     '10&colon;00–22&colon;00',
//     '',
//     // `https://yandex.ru/maps/213/moscow/?ll=${loc1.lng}%2C${loc1.lat}&mode=routes&rtext=~${loc1.lat}%2C${loc1.lng}&rtt=auto&ruri=~&z=10`
//     'https://yandex.ru/maps/-/'
//   ),
//   lat: 55.742651,
//   lng: 37.612731,
// };

const loc1 = {
  data: () => addData(
    NAMES[0],
    '',
    'Клязьминское водохранилище, причал «Золотой Город»',
    [],
    '',
    '',
    // `https://yandex.ru/maps/213/moscow/?ll=${loc1.lng}%2C${loc1.lat}&mode=routes&rtext=~${loc1.lat}%2C${loc1.lng}&rtt=auto&ruri=~&z=10`
    'https://yandex.ru/maps/-/'
  ),
  // lat: 55.9912,
  // lng: 37.5667,
  lat: 55.9857,
  lng: 37.5886,
};

const loc2 = {
  data: () => addData(
    NAMES[1],
    '',
    'Большой Спасоглинищевский переулок, 9/1, с10',
    ['Китай-город'],
    '',
    '',
    // `https://yandex.ru/maps/213/moscow/?ll=${loc1.lng}%2C${loc1.lat}&mode=routes&rtext=~${loc1.lat}%2C${loc1.lng}&rtt=auto&ruri=~&z=10`
    'https://yandex.ru/maps/-/'
  ),
  lat: 55.7549,
  lng: 37.6374,
};

const locations = [
  [loc1.data, loc1.lat, loc1.lng],
  [loc2.data, loc2.lat, loc2.lng]
];

// https://docs.mapbox.com/api/maps/#static-tiles
// const mapboxUrl = 'https://api.mapbox.com/styles/v1/{username}/{style_id}/tiles/{z}/{x}/{y}@2x?access_token={accessToken}';

let mapboxUrl;
if (root.dataset.device === 'mobile') {
  mapboxUrl = 'https://api.mapbox.com/styles/v1/{username}/{style_id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
} else {
  mapboxUrl = 'https://api.mapbox.com/styles/v1/{username}/{style_id}/tiles/{z}/{x}/{y}@2x?access_token={accessToken}';
}

// https://docs.mapbox.com/help/glossary/zoom-level/#tile-size
const vectorLayerOptions = {
  minZoom: 8,
  maxZoom: 18,
  username: 'mevius6',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: process.env.MAPBOX_ACCESS_TOKEN,
}

const night = L.tileLayer(mapboxUrl, {
  ...vectorLayerOptions,
  style_id: DARK_STYLE_ID
});

const light = L.tileLayer(mapboxUrl, {
  ...vectorLayerOptions,
  style_id: LIGHT_STYLE_ID
});

const style = root.dataset.themeStyle;
const toggle = document.querySelector('theme-switch');

toggle.addEventListener('colorschemechange', () => {
  if (toggle.mode === 'dark') {
    night.addTo(map) && light.removeFrom(map);
  } else {
    light.addTo(map) && night.removeFrom(map);
  }
});

const coords1 = L.latLng(loc1.lat, loc1.lng),
      coords2 = L.latLng(loc2.lat, loc2.lng),
      bounds = L.latLngBounds(coords1, coords2);

const mapOptions = {
  attributionControl: false,
  zoomControl: false,
  zoomSnap: 0.5,
  layers: [], // [night, light]
  scrollWheelZoom: false,
}

const map = L.map('map', mapOptions).setView([loc2.lat, loc2.lng], 10);
// const map = L.map('map', mapOptions).fitBounds(bounds, {
//   padding: [0, 0]
// });

(async () => {
  if (style === 'dark') {
    night.addTo(map);
  } else if (style === 'light') {
    light.addTo(map);
  } else {
    // w/o any style
    light.addTo(map);
  }
})();

// https://leafletjs.com/reference-1.7.1.html#icon
const markerIcon = L.divIcon({
  html: ICON,
  iconSize: [48, 48],
  popupAnchor: [0, -24],
  className: 'marker-icon',
});

const popupOptions = {
  // maxWidth: 300,
  maxWidth: 'unset',
  keepInView: true,
  closeButton: true,
  className: 'map-popup',
};

const markers = [];
locations.map((location, i) => {
  let coords = [location[1], location[2]];
  let marker = L.marker(coords, {icon: markerIcon, title: NAMES[i]});

  marker
    .bindPopup(location[0], popupOptions)
    .on('click', () => map.setView(coords));

  markers.push(marker);
});

// https://leafletjs.com/reference-1.7.1.html#layergroup-togeojson
L.layerGroup(markers).addTo(map);

markers[1].openPopup();

L.control.zoom({
  position: 'topright',
  zoomInText: ICON_ZOOM_IN,
  zoomInTitle: 'Приблизить',
  zoomOutText: ICON_ZOOM_OUT,
  zoomOutTitle: 'Отдалить',
}).addTo(map);

L.control
  .attribution({position: 'bottomright'})
  .addAttribution(ATTR)
  .addTo(map);

selectAll('.addon-controls__item').forEach((control, i) => {
  let coords = [locations[i][1], locations[i][2]];

  // TODO: and vice versa, when pressing the marker
  control.addEventListener('change', () => {
    markers[i].openPopup();
    map.setView(coords);
  }, false);
});

/* eslint-enable no-unused-vars */
