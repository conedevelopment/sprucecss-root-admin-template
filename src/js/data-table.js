function dataTable(dataSource, filterParams) {
  return {
    items: null,
    sortCol: null,
    sortAsc: false,
    pageSize: 10,
    curPage: 1,
    total: '',
    formData: {},
    filters: [],
    search: '',
    selectAll: false,
    resultsCount: null,

    async init() {
      let data = window[dataSource];
      data.forEach((d,i) => d.id = i);
      this.items = data;
      this.total = data.length;
      this.resultsCount = `Showing 1 to ${Math.min(this.pageSize, data.length)} of ${data.length} results`;

      this.$watch('pageSize', () => this.updateResultsCount());
    },

    viewPage(index) {
      this.curPage = index;
      this.updateResultsCount();
    },

    nextPage() {
      if ((this.curPage * this.pageSize) < this.items.length) this.curPage++;
      this.updateResultsCount();
    },

    previousPage() {
      if (this.curPage > 1) this.curPage--;
      this.updateResultsCount();
    },

    pages() {
      return Array.from({
        length: Math.ceil(this.total / this.pageSize),
      });
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
      const end = Math.min(this.curPage * this.pageSize, this.total);

      this.resultsCount = `Showing ${start} to ${end} of ${this.total} results`;
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

    submitForm(formData) {
      for (let key in formData) {
        if (formData.hasOwnProperty(key)) {
          let existingFieldIndex = this.filters.findIndex(item => item.name === key);

          if (formData[key] === 'All') {
            if (existingFieldIndex !== -1) {
              this.filters.splice(existingFieldIndex, 1);
            }
            continue;
          }

          if (existingFieldIndex !== -1) {
              this.filters[existingFieldIndex].value = formData[key];
          } else {
              this.filters.push({ name: key, value: formData[key] });
          }
        }
      }
    },

    get pagedItems() {
      let filteredItems = this.items;

      if (this.search.length > 2) {
        filteredItems = this.filtered(filteredItems, ...filterParams);
        this.curPage = 1;
      }

      if (this.filters.length) {
        filteredItems = filteredItems.filter((item) => {
          for (var key in this.filters) {
            if (this.filters[key].value === '') {
              continue;
            }

            if (!String(item[this.filters[key].name]).includes(this.filters[key].value)) {
              return false;
            }
          }

          return true;
        });

        this.curPage = 1;
      }

      this.total = filteredItems.length;
      this.updateResultsCount();

      return filteredItems.filter((row, index) => {
        let start = (this.curPage - 1) * this.pageSize;
        let end = this.curPage * this.pageSize;

        if (index >= start && index < end) return true;
      });
    },

    get selectedItems() {
      return this.items.filter((item) => item.selected);
    },
  }
}
