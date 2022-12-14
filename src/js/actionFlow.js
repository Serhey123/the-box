import template from './template';

export function actionFlow(id, data) {
  const flows = {
    ['all']: markupAll,
    ['commercial']: markupCommercial,
    ['residental']: markupResidental,
    ['other']: markupOther,
  };
  return flows[id](data);
}

export function markupAll(arr) {
  const activePanRef = document.querySelector('.pane--active');

  activePanRef.innerHTML = '';

  arr.forEach(card => {
    activePanRef.insertAdjacentHTML('beforeend', template(card));
  });
}

function markupCommercial(arr) {
  const filteredData = arr.filter(card => {
    return card.type === 'Commercial';
  });
  markupAll(filteredData);
}

function markupResidental(arr) {
  const filteredData = arr.filter(card => {
    return card.type === 'Residental';
  });
  markupAll(filteredData);
}

function markupOther(arr) {
  const filteredData = arr.filter(card => {
    return card.type === 'Other';
  });
  markupAll(filteredData);
}
