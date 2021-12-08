const vm = new Vue({
    el: "#app",
    data: {
        voltar:"",
        proximo:"",
        list: {},
        link:""
    },
       computed:{
        pagination(){
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`)
            .then((response) => response.json())
            .then((data) => {
                this.list = data.results
                this.voltar = data.previous
                this.proximo = data.next
            });
        },
        pkList() {
            fetch(this.link)
                .then((response) => response.json())
                .then((data) => {
                    return this.list = data.results;
                });
        },
        takeLink(){
            fetch(this.link)
            .then(r => r.json())
            .then(data =>{
                console.log(data)
            })
        }           
    }
   
});
