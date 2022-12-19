import template from './template';

let currentPage = 0;
const itemsPerPage = 4;
let pages;

function markupAll(data) {
  const wrapper = document.querySelector('.pane--active .wrapper');

  wrapper.innerHTML = '';

  const countStart = itemsPerPage * currentPage;
  const paginatedItems = data.slice(countStart, countStart + itemsPerPage);
  pages = Math.ceil(data.length / itemsPerPage);
  console.log(pages, 'allpages');

  paginatedItems.forEach(card => {
    wrapper.insertAdjacentHTML('beforeend', template(card));
  });
  return data;
}

export function markupSomeItems(data, id) {
  currentPage = 0;
  if (id !== 'all') {
    const filteredData = data.filter(card => {
      return card.type === id;
    });
    return markupAll(filteredData);
  } else {
    return markupAll(data);
  }
}

export function nextBtnHandler(data) {
  if (currentPage + 1 !== pages) {
    console.log(currentPage, 'curr bef');
    currentPage += 1;
    console.log(currentPage, 'curr aft');
    markupAll(data);
  }
}
export function prevBtnHandler(data) {
  if (currentPage !== 0) {
    console.log(currentPage, 'curr bef');
    currentPage -= 1;
    console.log(currentPage, 'curr aft');
    markupAll(data);
  }
}
