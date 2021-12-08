const vm = new Vue({
    el: "#app",
    data: {
        result: [],
        pkMore:{},
        perPage:""
    },
    methods: {
        listPk() {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${this.perPage}`)
                .then((r) => r.json())
                .then((data) => {
                  this.pkList = data
                  return this.result = data.results
                })
        },
        pkPage(event) {
            fetch(event)
                .then((r) => r.json())
                .then((data) => {
                  this.pkMore = data;
                })
                .catch( err => {
                    console.log(err,"nada encontrado")
                })
        },
    },
});
console.log(vm.pkPage())