 export const mask = {

     arrayElements: function(className) {
         return Object.entries(document.getElementsByClassName(className));
     },
     cep: function() {
         this.arrayElements("CEP").forEach(element => {
             element[1].addEventListener("keypress", function(e) {
                 this.value = this.value.replace(/[^\d]+/g, '');;
                 this.value = this.value.replace(/[^\d]+/g, '');
                 this.value = this.value.replace(/(\d{5})(\d{2})/, '$1-$2');
             })
         });
     },
     quantidade: function() {
        this.arrayElements("quantidade").forEach(element => {
            element[1].addEventListener("keypress", function(e) {
                this.value = this.value.replace(/[^\d]+/g, '');
                this.value = this.value.replace(/[^\d]+/g, '');                            
            })
        });
    },
    valor: function() {
        this.arrayElements("valor").forEach(element => {
            element[1].addEventListener("keypress", function(e) {
                this.value = this.value.replace(/[^\d]+/g, '');                                            
            })
        });
    },
     telefone: function() {
         this.arrayElements("TELEFONE").forEach(element => {

             element[1].addEventListener("keypress", function(event) {
                 var valor = this.attributes[0].ownerElement['value'];
                 var retorno = valor.replace(/\D/g, "");
                 retorno = retorno.replace(/^0/, "");
                 if (retorno.length > 10) {
                     retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
                 } else if (retorno.length > 5) {
                     if (retorno.length == 6 && event.code == "Backspace") {
                         // necessário pois senão o "-" fica sempre voltando ao dar backspace
                         return;
                     }
                     retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
                 } else if (retorno.length > 2) {
                     retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
                 } else {
                     if (retorno.length != 0) {
                         retorno = retorno.replace(/^(\d*)/, "($1");
                     }
                 }
                 this.attributes[0].ownerElement['value'] = retorno;
             })

         });
     },
     focus: function() {
         this.arrayElements("form-control").forEach(element => {
             element[1].addEventListener("focus", function(e) {
                 this.classList.add("input-lg");
                 this.classList.add("app-input-text");
                 this.parentElement.classList.remove("input-group"); 
                 this.previousElementSibling.classList.remove("input-group");
                 this.previousElementSibling.style.display = "none";
             })
         });
     },

     lostfocus: function(evento) {
         this.arrayElements("form-control").forEach(element => {
             element[1].addEventListener(evento, function(e) {
                 this.classList.remove("input-lg");
                 this.classList.remove("app-input-text");
                 this.previousElementSibling.style.display = "none";
                 this.parentElement.classList.add("input-group");
                 this.previousElementSibling.classList.add("input-group");
                 this.previousElementSibling.style.display = "";
             })
         });
     },

 };