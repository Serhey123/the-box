import 'normalize.css';
import './scss/main.scss';

import Swiper, { Navigation } from 'swiper';

import 'swiper/swiper.min.css';

import Tabs from './js/tabs';

import data from './js/data';
import refs from './js/refs';
import { actionFlow, markupAll } from './js/actionFlow';

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
    actionFlow(e.target.id, data);
  }
});

markupAll(data);
