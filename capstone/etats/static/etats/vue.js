new Vue({
    el: '#app',
    data: {
      userItem: '',
      listItems: [],
      taxList: [],
      politicsList: [],
      housingList: [],
      crimeList: [],
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
        // Appends user input to 'listItems' array and clears input field
        addTaxItem (state) {
            let stateName = state.state_name;
            let index = this.taxList.indexOf(stateName);
            
            if (index === -1) {
              this.taxList.push(stateName);
              console.log(this.taxList);
              alert(`You have added ${stateName} to your favorites.`)
            } else {
              this.taxList.splice(index, 1);
              console.log(this.taxList);
              alert(`You have removed ${stateName} from your favorites.`)
            }
        },
        addPoliticsItem (state) {
            let stateName = state.state_name;
            let index = this.politicsList.indexOf(stateName);
            
            if (index === -1) {
              this.politicsList.push(stateName);
              console.log(this.politicsList);
              alert(`You have added ${stateName} to your favorites.`)
            } else {
              this.politicsList.splice(index, 1);
              console.log(this.politicsList);
              alert(`You have removed ${stateName} from your favorites.`)
            }        },
        addHousingItem (state) {
            let stateName = state.state_name;
            let index = this.housingList.indexOf(stateName);
            
            if (index === -1) {
              this.housingList.push(stateName);
              console.log(this.housingList);
              alert(`You have added ${stateName} to your favorites.`)
            } else {
              this.housingList.splice(index, 1);
              console.log(this.housingList);
              alert(`You have removed ${stateName} from your favorites.`)
            }
        },
        addCrimeItem (state) {
            let stateName = state.state_name;
            let index = this.crimeList.indexOf(stateName);
            
            if (index === -1) {
              this.crimeList.push(stateName);
              console.log(this.crimeList);
              alert(`You have added ${stateName} to your favorites.`)
            } else {
              this.crimeList.splice(index, 1);
              console.log(this.crimeList);
              alert(`You have removed ${stateName} from your favorites.`)
            }
        },
        // Item is marked complete/incomplete
        boxChecked (todoItem) {
            let todoIndex = this.listItems.indexOf(todoItem)
            this.listItems[todoIndex].completed = !this.listItems[todoIndex].completed
        },
        // Item is deleted from list
        deleteItem (todoItem) {
            this.listItems.splice(todoItem, 1)
        },
        // clears unsaved user input from search field, loaded definition, and audio link 
        clearInput() {
            this.userInput = '';
            this.output = {};
            this.audio = '';
        },
        // stores saved words to local storage, alerts user, and empties savedWords array
        downloadWordList() {
            const download = this.savedWords
            localStorage.setItem('download', JSON.stringify(download));
            console.log(download);
            this.savedWords = [];
            alert('You have successfully downloaded your saved words.')
        },
        // loads stored words from local storage
        uploadWordList() {
            const upload = JSON.parse(localStorage.getItem('download'));
            this.savedWords = upload
        },
    },
})
