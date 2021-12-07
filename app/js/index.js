const vm = new Vue({
    el: "#app",
    data: {
        pkList:{},
        result: [],
        pkMore:{}
    },
    methods: {
        listPk() {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1118`)
                .then((r) => r.json())
                .then((data) => {
                  this.pkList = data
                  this.result = data.results
                })
        },
        pkPage(event) {
            fetch(event)
                .then((r) => r.json())
                .then((data) => {
                  this.pkMore = data;
                })
        },
    },
});
