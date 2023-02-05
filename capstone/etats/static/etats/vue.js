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
    try {
    this.taxList = JSON.parse(localStorage.getItem('taxList')) || [];
    this.politicsList = JSON.parse(localStorage.getItem('politicsList')) || [];
    this.housingList = JSON.parse(localStorage.getItem('housingList')) || [];
    this.crimeList = JSON.parse(localStorage.getItem('crimeList')) || [];
    } catch (error) {
    console.error(error);
    }
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
        // Overwrite the lists in localStorage
        alert(`You have updated your ${listName.split("List")[0]} favorites to the following: ${this[listName]}.`)
        // Store the list to localStorage
        localStorage.setItem(listName, JSON.stringify(this[listName]));
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
        // Toggle the value of `taxSortOrder`
        this.taxSortOrder = !this.taxSortOrder;
        // Sort the `listItems` array based on the value of `taxSortOrder`
        // If `taxSortOrder` is `false`, sort in descending order by tax rate
        this.listItems.sort((a, b) => {
        return this.taxSortOrder ? a.tax_rate - b.tax_rate : b.tax_rate - a.tax_rate;
        });
      },
      sortHousingList() {
        // Toggle the value of `housingSortOrder`
        this.housingSortOrder = !this.housingSortOrder;
        // Sort the `listItems` array based on the value of `housingSortOrder`
        // If `housingSortOrder` is `false`, sort in descending order by median home value
        this.listItems.sort((a, b) => {
        return this.housingSortOrder ? a.median_home_value - b.median_home_value : b.median_home_value - a.median_home_value;
        });
      },
      sortCrimeList() {
        // Toggle the value of `crimeSortOrder`
        this.crimeSortOrder = !this.crimeSortOrder;
        // Sort the `listItems` array based on the value of `crimeSortOrder`
        // If `crimeSortOrder` is `false`, sort in descending order by crime rate
        this.listItems.sort((a, b) => {
        return this.crimeSortOrder ? a.crime_rate - b.crime_rate : b.crime_rate - a.crime_rate;
        });
      },
      sortPoliticsList() {
        // Compares the political affiliation of two states (a and b)
        this.listItems.sort((a, b) => {
          // If the political affiliation of state 'a' is greater than (later in alphabetical order) that of state 'b', return 1.
          if (a.political_affiliation > b.political_affiliation) return 1;
          // If the political affiliation of state 'a' is less than (earlier in alphabetical order) that of state 'b', return -1.
          if (a.political_affiliation < b.political_affiliation) return -1;
          // If the political affiliation of both states is the same, return 0.
          return 0;
        });
      },
  },
  computed: {
    sortedList() {
      return this.listItems.sort((a, b) => {
        return b.count - a.count;
      });
    },
    favoritesList() {
      let result = [];
      this.listItems.forEach(item => {
        let count = 0;
        if (this.taxList.includes(item.state_name)) count++;
        if (this.politicsList.includes(item.state_name)) count++;
        if (this.housingList.includes(item.state_name)) count++;
        if (this.crimeList.includes(item.state_name)) count++;
        if (count > 0) {
          item.count = count;
          result.push(item);
        }
      });
      return result.sort((a, b) => b.count - a.count);
    }
    }
  }
)