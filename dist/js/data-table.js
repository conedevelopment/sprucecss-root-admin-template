function dataTable() {
  return {
    items: null,
    sortCol:null,
    sortAsc:false,
    pageSize:4,
    curPage:1,
    search: '',
    selectAll: false,
    resultsCount: null,

    async init() {
      let data = window.products;
      data.forEach((d,i) => d.id = i);
      this.items = data;
      this.resultsCount = `Showing 1 to ${Math.min(this.pageSize, data.length)} of ${data.length} results`;
    },

    nextPage() {
      if((this.curPage * this.pageSize) < this.items.length) this.curPage++;
      this.updateResultsCount();
    },

    previousPage() {
      if(this.curPage > 1) this.curPage--;
      this.updateResultsCount();
    },

    sort(col) {
      if(this.sortCol === col) this.sortAsc = !this.sortAsc;
      this.sortCol = col;
      this.items.sort((a, b) => {
        if(a[this.sortCol] < b[this.sortCol]) return this.sortAsc?1:-1;
        if(a[this.sortCol] > b[this.sortCol]) return this.sortAsc?-1:1;
        return 0;
      });
    },

    toggleAllCheckbox() {
      let filteredItems = this.filtered(this.items);
      if (filteredItems.length === this.selectedItems.length) {
        return filteredItems.map((item) => (item.selected = false));
      }
      filteredItems.map((item) => (item.selected = true));
    },

    selectAllCheckbox() {
      this.selectAll = true;
      let filteredItems = this.filtered(this.items);
      filteredItems.map((item) => (item.selected = true));
    },

    deselectAllCheckbox() {
      this.selectAll = false;
      let filteredItems = this.filtered(this.items);
      filteredItems.map((item) => (item.selected = false));
    },

    updateResultsCount() {
      const start = (this.curPage - 1) * this.pageSize + 1;
      const end = Math.min(this.curPage * this.pageSize, this.items.length);
      const total = this.items.length;

      this.resultsCount = `Showing ${start} to ${end} of ${total} results`;
    },

    filtered(...items) {
      values = items.shift();
      props = items.length ? items : null;

      return values.filter((i) => {
        y = Object.assign({}, i);
        delete y['userId'];
        if (props) {
          okeys = Object.keys(y).filter((b) => !props.includes(b));
          okeys.map((d) => delete y[d]);
        }
        itemToSearch = Object.values(y).join();
        return itemToSearch.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    get pagedItems() {
      if(this.items) {
        return this.items.filter((row, index) => {
          let start = (this.curPage-1)*this.pageSize;
          let end = this.curPage*this.pageSize;
          if(index >= start && index < end) return true;
        })
      } else return [];
    },

    get selectedItems() {
      return this.items.filter((item) => item.selected);
    },
  }
}
