import paginator from './paginator.js';
import { markupAll } from './actionFlow.js';
import { templatePageBtns } from './template.js';

function nextBtnHandler(data) {
  if (paginator.currentPage + 1 !== paginator.pages) {
    const activePage = document.querySelector(
      '.pane--active .page-btn--active',
    );
    activePage.nextElementSibling.classList.add('page-btn--active');

    activePage.classList.remove('page-btn--active');

    paginator.increasePages();

    markupAll(data);
  }
}

function prevBtnHandler(data) {
  if (paginator.currentPage !== 0) {
    const activePage = document.querySelector(
      '.pane--active .page-btn--active',
    );
    activePage.previousElementSibling.classList.add('page-btn--active');

    activePage.classList.remove('page-btn--active');

    paginator.decreasePages();

    markupAll(data);
  }
}

export function pagesBtns(data) {
  const wrapper = document.querySelector('.pane--active .pages-wrapper');
  wrapper.innerHTML = '';
  for (let i = 1; i < paginator.pages + 1; i += 1) {
    wrapper.insertAdjacentHTML('beforeend', templatePageBtns(i));
    const btns = document.querySelectorAll('.page-btn');

    btns.forEach(btn => {
      if (paginator.currentPage === btn.dataset.page - 1) {
        btn.classList.add('page-btn--active');
      }
      btn.addEventListener('click', e => {
        const activePage = document.querySelector(
          '.pane--active .page-btn--active',
        );

        if (activePage) {
          activePage.classList.remove('page-btn--active');
        }

        e.target.classList.add('page-btn--active');
        paginator.currentPage = e.target.dataset.page - 1;
        markupAll(data);
      });
    });
  }
}

export function nextBtn() {
  nextBtnHandler(paginator.currentData);
}

export function prevBtn() {
  prevBtnHandler(paginator.currentData);
}
