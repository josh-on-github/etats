new Vue({
  el: '#app',
  data: {
    userItem: '',
    listItems: [],
    taxList: [],
    taxSortOrder: false,
    politicsList: [],
    housingList: [],
    housingSortOrder: false,
    crimeList: [],
    crimeSortOrder: false,
    selectedStates: [],
    active: false,
  },
  delimiters: ['[[',']]'],
  mounted() {
    this.getStateObject();
  },
  methods: {
      // searches API and loads state information
      getStateObject() {
          console.log('GET Request');
          axios.get('/api')
          .then(response => this.listItems = response.data)
          .then(data => console.log(data))
          .catch(error => console.error(error));
      },
      onSubmit() {
      // set active to true when form is submitted
      this.active = true;
      },
      addSelectedStates(listName) {
        // clear the list
        this[listName] = [];
        // loop through the selected states and add them to list
        for (const state of this.selectedStates) {
            this[listName].push(state.state_name);
        }
        console.log(this[listName]);
        alert(`You have updated your ${listName.split("List")[0]} favorites to the following: ${this[listName]}.`)

      },
      // Add/remove state from selectedStates array based on checkbox value
      addItem(listName, state) {
        const index = this.selectedStates.indexOf(state);
        if (index === -1) {
            this.selectedStates.push(state);
        } else {
            this.selectedStates.splice(index, 1);
        }
      },
      sortTaxList() {
        this.taxSortOrder = !this.taxSortOrder;
        this.listItems.sort((a, b) => {
        return this.taxSortOrder ? a.tax_rate - b.tax_rate : b.tax_rate - a.tax_rate;
        });
      },
      sortHousingList() {
        this.housingSortOrder = !this.housingSortOrder;
        this.listItems.sort((a, b) => {
        return this.housingSortOrder ? a.median_home_value - b.median_home_value : b.median_home_value - a.median_home_value;
        });
      },
      sortCrimeList() {
        this.crimeSortOrder = !this.crimeSortOrder;
        this.listItems.sort((a, b) => {
        return this.crimeSortOrder ? a.crime_rate - b.crime_rate : b.crime_rate - a.crime_rate;
        });
      },
      sortPoliticsList() {
        this.politicsSortOrder = !this.politicsSortOrder;
        this.listItems.sort((a, b) => {
          if (a.political_affiliation > b.political_affiliation) return 1;
          if (a.political_affiliation < b.political_affiliation) return -1;
          return 0;
        });
      },
      
  }
})
  
  // // stores saved words to local storage, alerts user, and empties savedWords array
  // downloadWordList() {
  //   const download = this.savedWords
  //   localStorage.setItem('download', JSON.stringify(download));
  //   console.log(download);
  //   this.savedWords = [];
  //   alert('You have successfully downloaded your saved words.')
  // },
  // // loads stored words from local storage
  // uploadWordList() {
  //   const upload = JSON.parse(localStorage.getItem('download'));
  //   this.savedWords = upload
  // },