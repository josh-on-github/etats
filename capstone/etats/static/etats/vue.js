new Vue({
    el: '#app',
    data: {
        output: {},
        listItems: [],
        delete: '',
        userItem: '',
        searchError: false,

    },
    delimiters: ['[[',']]'],
    mounted() {
        this.getStateObject()
    },
    methods: {
        // searches API with user input and loads state info 
        getStateObject() {
            console.log('GET Request');
            axios.get('/api')
            .then(response => this.listItems = response.data)
            .then(data => console.log(data))
            // alerts user if user input is not found in API
            .catch(error => this.searchError = true && alert('Your search did not produce any results.  Please check your spelling and try again.'))
        },
        // Appends user input to 'listItems' array and clears input field
        addTaxItem () {
            this.listItems.push({
                State: this.userItem,
                completed: false,
              }),
            this.userItem = ''
        },
        addPoliticsItem () {
            this.listItems.push({
                State: this.userItem,
                completed: false,
              }),
            this.userItem = ''
        },
        addHousingItem () {
            this.listItems.push({
                State: this.userItem,
                completed: false,
              }),
            this.userItem = ''
        },
        addCrimeItem () {
            this.listItems.push({
                State: this.userItem,
                completed: false,
              }),
            this.userItem = ''
        },
        addSearchItem () {
            this.listItems.push({
                State: this.userItem,
                completed: false,
              }),
            this.userItem = ''
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
    }})
