const paginator = {
  currentPage: 0,
  itemsPerPage: 4,
  pages: null,
  currentData: {},

  countPages(data) {
    this.pages = Math.ceil(data.length / this.itemsPerPage);
  },

  countStart() {
    return this.itemsPerPage * this.currentPage;
  },

  paginateItems(data) {
    return data.slice(this.countStart(), this.countStart() + this.itemsPerPage);
  },

  resetPages() {
    this.currentPage = 0;
  },

  increasePages() {
    this.currentPage += 1;
  },

  decreasePages() {
    this.currentPage -= 1;
  },
};

export default paginator;
