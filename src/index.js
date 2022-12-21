import 'normalize.css';
import './scss/main.scss';

import Swiper, { Navigation } from 'swiper';

import 'swiper/swiper.min.css';

import Tabs from './js/tabs';

import data from './js/data';
import refs from './js/refs';

import renderCards from './js/renderCards.js';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
});

const tabs1 = new Tabs({
  rootSelector: '#tabs-1',
  activeControlClass: 'controls__item--active',
  activePaneClass: 'pane--active',
});

refs.tabsRef.addEventListener('click', e => {
  if (e.target.id) {
    renderCards(data, e.target.id);
  }
});

renderCards(data, 'all');
