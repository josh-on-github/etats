new Vue({
  el: '#app',
  data: {
    userItem: '',
    listItems: [],
    taxList: [],
    politicsList: [],
    housingList: [],
    crimeList: [],
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
    },
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