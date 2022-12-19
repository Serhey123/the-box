import 'normalize.css';
import './scss/main.scss';

import Swiper, { Navigation } from 'swiper';

import 'swiper/swiper.min.css';

import Tabs from './js/tabs';

import data from './js/data';
import refs from './js/refs';
import {
  markupSomeItems,
  nextBtnHandler,
  prevBtnHandler,
} from './js/actionFlow';

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

let action;

refs.tabsRef.addEventListener('click', e => {
  if (e.target.id) {
    const nextBtnRef = document.querySelector('.pane--active .next-btn');
    const prevBtnRef = document.querySelector('.pane--active .prev-btn');

    nextBtnRef.removeEventListener('click', nextBtn);
    prevBtnRef.removeEventListener('click', prevBtn);
    action = markupSomeItems(data, e.target.id);

    if (action.length > 4) {
      const btnWrapperRef = document.querySelector(
        '.pane--active .btn-wrapper',
      );
      btnWrapperRef.classList.remove('btn-wrapper--disabled');
    }

    nextBtnRef.addEventListener('click', nextBtn);
    prevBtnRef.addEventListener('click', prevBtn);
  }
});
function nextBtn() {
  console.log('click');
  nextBtnHandler(action);
}

function prevBtn() {
  console.log('click');
  prevBtnHandler(action);
}

const nextBtnRef = document.querySelector('.pane--active .next-btn');
const prevBtnRef = document.querySelector('.pane--active .prev-btn');
action = markupSomeItems(data, 'all');
if (action.length > 4) {
  const btnWrapperRef = document.querySelector('.pane--active .btn-wrapper');
  btnWrapperRef.classList.remove('btn-wrapper--disabled');
}
nextBtnRef.addEventListener('click', nextBtn);
prevBtnRef.addEventListener('click', prevBtn);
