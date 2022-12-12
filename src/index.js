import 'normalize.css';
import './scss/main.scss';

import Swiper, { Navigation } from 'swiper';

import 'swiper/swiper.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
});
