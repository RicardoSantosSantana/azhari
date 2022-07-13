export const estados_cidades = {

    dataJSON: response => response.json(),
    clickEstado: function() {
        const estado = document.getElementById('estados');
        estado.addEventListener("change", (e) => {
            this.changeOptionsCity(e.target.value)
        })
    },
    getOptionsCidades: estados => estados[0].cidades.map(citys => `<option value="${citys}">${citys}</option>`),
    addOptionsCitys: options => {
        document.getElementById("cidades").innerHTML = null
        document.getElementById("cidades").innerHTML = options;
    },
    changeOptionsCity: function(cityName) {
        fetch("estados-cidades.json")
            .then(this.dataJSON)
            .then(dados => dados.estados.filter(estado => estado.nome == cityName))
            .then(this.getOptionsCidades)
            .then(this.addOptionsCitys)
    }
}