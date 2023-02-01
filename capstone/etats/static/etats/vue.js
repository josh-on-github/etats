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
    // mounted: () => {
        // this.getStateObject()
        // // console.log('Test')
            // console.log('GET Request');
            // axios.get('/api')
            // .then(response => console.log(response.data))
            // .then(response => this.listItems = response.data)
                // this.listItems.push(response.data))
    // },
    methods: {
        // searches Free Dictionary API with user input and loads definition 
        getStateObject() {
            console.log('GET Request');
            axios.get('/api')
            .then(response => this.listItems = response.data)
            // .meanings[0].definitions[0].definition)
            .then(data => console.log(data))
            // alerts user if user input is not found in dictionary
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
        }
    }})
