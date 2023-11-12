function dataTable( // eslint-disable-line
  dataSource,
  filterParams,
) {
  return {
    curPage: 1,
    filters: [],
    formData: {},
    items: null,
    pageSize: 10,
    resultsCount: null,
    search: '',
    selectAll: false,
    sortAsc: false,
    sortCol: null,
    total: null,

    async init() {
      const data = window[dataSource];
      data.forEach((d, i) => d.id = i); // eslint-disable-line
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
      if ((this.curPage * this.pageSize) < this.items.length) this.curPage += 1;
      this.updateResultsCount();
    },

    previousPage() {
      if (this.curPage > 1) this.curPage -= 1;
      this.updateResultsCount();
    },

    pages() {
      return Array.from({
        length: Math.ceil(this.total / this.pageSize),
      });
    },

    sort(col) {
      if (this.sortCol === col) this.sortAsc = !this.sortAsc;
      this.sortCol = col;
      this.items.sort((a, b) => {
        if (a[this.sortCol] < b[this.sortCol]) return this.sortAsc ? 1 : -1;
        if (a[this.sortCol] > b[this.sortCol]) return this.sortAsc ? -1 : 1;
        return 0;
      });
    },

    updateSelectAllStatus() {
      this.selectAll = this.selectedItems.length === this.items.length;
    },

    toggleAllCheckbox() {
      const filteredItems = this.filtered(this.items);

      if (filteredItems.length === this.selectedItems.length) {
        filteredItems.forEach((item) => (item.selected = false)); // eslint-disable-line
      } else {
        filteredItems.forEach((item) => (item.selected = true)); // eslint-disable-line
      }

      this.updateSelectAllStatus();
    },

    selectAllCheckbox() {
      this.selectAll = true;
      const filteredItems = this.filtered(this.items);
      filteredItems.map((item) => (item.selected = true)); // eslint-disable-line
    },

    deselectAllCheckbox() {
      this.selectAll = false;
      const filteredItems = this.filtered(this.items);
      filteredItems.map((item) => (item.selected = false)); // eslint-disable-line
    },

    updateResultsCount() {
      const start = (this.curPage - 1) * this.pageSize + 1;
      const end = Math.min(this.curPage * this.pageSize, this.total);

      this.resultsCount = `Showing ${start} to ${end} of ${this.total} results`;
    },

    filtered(...items) {
      const values = items.shift();
      const props = items.length ? items : null;

      return values.filter((i) => {
        const y = { ...i };
        delete y.userId;

        if (props) {
          const okeys = Object.keys(y).filter((b) => !props.includes(b));
          okeys.map((d) => delete y[d]);
        }

        const itemToSearch = Object.values(y).join();

        return itemToSearch.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    submitForm(formData) {
      this.deselectAllCheckbox();
      this.curPage = 1;

      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          const existingFieldIndex = this.filters.findIndex((item) => item.name === key);

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
      }

      if (this.filters.length) {
        filteredItems = filteredItems.filter((item) => {
          for (const key in this.filters) {
            if (this.filters[key].value === '') {
              continue;
            }

            if (!String(item[this.filters[key].name]).includes(this.filters[key].value)) {
              return false;
            }
          }

          return true;
        });
      }

      this.total = filteredItems.length;
      this.updateResultsCount();

      return filteredItems.filter((row, index) => {
        const start = (this.curPage - 1) * this.pageSize;
        const end = this.curPage * this.pageSize;

        if (index >= start && index < end) return true;

        return false;
      });
    },

    get selectedItems() {
      return this.items.filter((item) => item.selected);
    },
  };
}
