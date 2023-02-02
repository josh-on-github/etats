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
            this.taxList.push(state);
        },
        addPoliticsItem (state) {
            this.politicsList.push(state);
        },
        addHousingItem (state) {
            this.housingList.push(state);
        },
        addCrimeItem (state) {
            this.crimeList.push(state);
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
