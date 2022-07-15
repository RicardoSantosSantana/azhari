import { html } from "./html.js"

export const produtos = {
    data:[],    
    getValue:function(pai,classField){
        return document.getElementById(pai).querySelector("."+classField).value;
    },
    values:function(){
        const dados = [];        
        const lista = document.getElementsByClassName("list"); 
 
        Object.entries(lista).forEach(elemento=>{    
          dados.push({
            "id":this.getValue(elemento[1].id,"id"),
            "descricao":this.getValue(elemento[1].id,"descricao"),
            "medida":this.getValue(elemento[1].id,"medida"),
            "valor":this.getValue(elemento[1].id,"valor"),
            "quantidade":this.getValue(elemento[1].id,"quantidade")
          });    
        });  
        console.warn(dados)
        this.data = dados;
        return dados;
    },
    insert:function(descricao, medida, valor, quantidade){ 
        
        let id = Math.floor(Math.random() * (2000 -200)) + 200;     
        
        if(produtosProxy.data.length>0){
            this.values();
        }
 
        produtosProxy.data.push({id, descricao, medida, valor, quantidade})     
        produtosProxy.renderizar()
    },
    remove: function(id){ 
        this.data=this.data.filter(el=>el.id!=id)   
        produtosProxy.renderizar()            
    },
    getDatabase:function(data){
     
        this.data = data
        produtosProxy.renderizar()   
    },
    renderizar:function(){
        document.getElementById("itens-produtos").innerHTML = html.generate(produtosProxy)
    }
}

const produtosProxy = new Proxy(produtos, {
    set: function(target,propkey,value) {      
        target[propkey] = value;          
    },
    get: function(target,propkey){                            
        return target[propkey] 
    },
})
 