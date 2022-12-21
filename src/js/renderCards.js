import paginator from './paginator.js';
import { markupSomeItems } from './actionFlow.js';
import { nextBtn, prevBtn, pagesBtns } from './paginatorBtns.js';

export default function renderCards(data, id) {
  const nextBtnRef = document.querySelector('.pane--active .next-btn');
  const prevBtnRef = document.querySelector('.pane--active .prev-btn');

  nextBtnRef.removeEventListener('click', nextBtn);
  prevBtnRef.removeEventListener('click', prevBtn);
  markupSomeItems(data, id);

  if (paginator.currentData.length > paginator.itemsPerPage) {
    const btnWrapperRef = document.querySelector('.pane--active .btn-wrapper');
    btnWrapperRef.classList.remove('btn-wrapper--disabled');
    pagesBtns(paginator.currentData);
  }

  nextBtnRef.addEventListener('click', nextBtn);
  prevBtnRef.addEventListener('click', prevBtn);
}
