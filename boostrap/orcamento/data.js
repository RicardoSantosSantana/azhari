export const data = {
    remove:function(id){

      const lista = document.getElementById(`lista-produtos_${id}`);
      lista.style.opacity = '0';
      setTimeout(() =>  lista.remove(), 500);     
    },
    getValue:function(pai,classField){
      return document.getElementById(pai).querySelector("."+classField).value;
    },
    values:function(){
      const dados = [];
      const lista = document.getElementsByClassName("list"); 

      Object.entries(lista).forEach(elemento=>{      
        dados.push({
          "descricao":this.getValue(elemento[1].id,"descricao"),
          "medida":this.getValue(elemento[1].id,"medida"),
          "valor":this.getValue(elemento[1].id,"valor"),
          "quantidade":this.getValue(elemento[1].id,"quantidade")
        });    
      });  
      return dados;
    }
}