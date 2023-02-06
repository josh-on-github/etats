new Vue({
  el: '#app',
  data: {
    userItem: '', // string to store the user's input for searching (index.html only)
    listItems: [], // array to store the state objects fetched from the API
    taxList: [], // array to store the user's selected tax states
    taxSortOrder: false, // variable to determine the sort order of tax list
    politicsList: [],
    housingList: [],
    housingSortOrder: false,
    crimeList: [],
    crimeSortOrder: false,
    selectedStates: [], // array to store the selected states from checkboxes
    active: false,
  },
  delimiters: ['[[',']]'],
  mounted() {
    this.getStateObject();
    // Try to retrieve the user's selected states from local storage
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
          axios.get('/api') // send a GET request to the '/api' endpoint
          .then(response => this.listItems = response.data) // store the data in the listItems array
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
        // Store the list to localStorage
        localStorage.setItem(listName, JSON.stringify(this[listName]));
      },
      // Add/remove state from selectedStates array based on checkbox value
      addItem(listName, state) {
        const index = this.selectedStates.indexOf(state);
        // Add the state to the selectedStates array if it is not in the array already
        if (index === -1) { // -1 means that 'index' is not present in the array
            this.selectedStates.push(state);
        // Remove the state from the selectedStates array if it is in the array
        } else {
            this.selectedStates.splice(index, 1);
        }
      },
      sortTaxList() {
        // Toggle the value of `taxSortOrder`
        this.taxSortOrder = !this.taxSortOrder;
        // Sort the `listItems` array based on the value of `taxSortOrder`
        // If `taxSortOrder` is `false`, sort in descending order by tax rate
        this.listItems.sort((a, b) => { //comparison function returns the difference between the tax rate of two items (a and b).
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
        // Compares the political affiliation of two states (a and b) and returns the following order
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
    // Returns a sorted version of the `listItems` array
    sortedList() {
      // Sort the `listItems` array in descending order by the value of `count`
      return this.listItems.sort((a, b) => {
        return b.count - a.count;
      });
    },
    favoritesList() {
      let result = [];
      // Loop through each item in `listItems`
      this.listItems.forEach(item => {
        let count = 0;
        // If the item's `state_name` is included in the named arrays, increment `count`
        if (this.taxList.includes(item.state_name)) count++;
        if (this.politicsList.includes(item.state_name)) count++;
        if (this.housingList.includes(item.state_name)) count++;
        if (this.crimeList.includes(item.state_name)) count++;
        // If `count` is greater than 0, add the item to `result`
        if (count > 0) {
          item.count = count;
          result.push(item);
        }
      });
      // Sort the `result` array in descending order by the value of `count`
      return result.sort((a, b) => b.count - a.count);
    }
    }
  }
)

