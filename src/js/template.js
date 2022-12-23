export function templateProjectCards(data) {
  const tempaltedData = `<div class="project__card">
    <img src="${data.url}" alt="${data.type} type building" class="project__img">
    <div class="project__content">
      <p class="project__name">${data.name}</p>
      <p class="project__text">${data.address}</p>
    </div>
  </div>`;
  return tempaltedData;
}

export function templatePageBtns(i) {
  const tplBtn = `<button class="page-btn" data-page="${i}"></button>`;
  return tplBtn;
}
