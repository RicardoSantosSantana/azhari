export const html = {
    id: "",    
    html: async function (){        
      let id = Math.floor(Math.random() * (2000 -200)) + 200; 
      return await fetch("fields.html")
          .then(response=>response.text())
          .then(html=>` <div class="row list lista" id="lista-produtos_${id}">${this.title(id)+html}</div>`)
   }, 
    title: function(id){
      return `
          <div class="col-md-12 ">
              <div class="titulo">
                  <span> Produto ou Serviço</span>
                  <span>
                      <button class="btn btn-danger" onclick="removeProduto(${id})">Remover</button>
                  </span>
              </div> 
              <input type="text" 
                  autocomplete="off" 
                  class="form-control descricao" 
                  id="descricao" 
                  placeholder="Nome do Produto ou Serviço" 
                maxlength="50">
          </div>`;
    },    
    generate: async function(target){      
      const el = document.createElement('div');          
      el.innerHTML =  await  this.html()      
      document.getElementById(target)?.appendChild(el);    
      
    },
  
}