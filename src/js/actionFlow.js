import { templateProjectCards } from './template.js';

import paginator from './paginator.js';

export function markupAll(data) {
  const wrapper = document.querySelector('.pane--active .wrapper');

  wrapper.innerHTML = '';

  const paginatedItems = paginator.paginateItems(data);

  paginator.countPages(data);

  paginatedItems.forEach(card => {
    wrapper.insertAdjacentHTML('beforeend', templateProjectCards(card));
  });

  paginator.currentData = data;
}

export function markupSomeItems(data, id) {
  paginator.resetPages();
  if (id !== 'all') {
    const filteredData = data.filter(card => {
      return card.type === id;
    });
    markupAll(filteredData);
  } else {
    markupAll(data);
  }
}
