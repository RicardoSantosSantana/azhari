
export const html = {
    id: "",content:"",
    html: function (){  
      this.makeid();
      this.title().medida().valor().quantidade();      
      return ` <div class="row list" id="lista-produtos_${this.id}">${this.content}</div>`;
   }, 
    makeid: function(){    
        const min = 200;
        const max = 2000;
        this.id = Math.floor(Math.random() * (max - min)) + min; 
        return this;   
    },
    title: function(){

        this.content = `<div class="col-md-12 ">
          <div class="titulo"><span> Produto ou Serviço</span><span><button class="btn btn-danger" onclick="removeProduto(${this.id})">Remover</button></span></div> 
          <input type="text" autocomplete="on" class="form-control descricao" value="" id="descricao" placeholder="Nome do Produto ou Serviço" maxlength="50">
        </div>`;
        
        return this;
    },
    medida:function() {

        this.content+= `
          <div class="col-md-12">
            <div class="input-group ">
                <span class="input-group-addon"><strong>Medida</strong></span>
                <select class="form-control medida">
                    <option value="mts">Metros</option>
                    <option value="m²">Metros Quadrados</option>
                    <option value="m³">Metro Cúbico</option>
                    <option value="cm">Centímetros</option>
                    <option value="dz">Dúzias</option>
                    <option value="kg">Quilo</option>
                    <option value="gm">Grama</option>
                    <option value="km">Quilômetros</option>
                    <option value="unid">Unidades</option>
                    <option value="lts">Litros</option>
                    <option value="min">Minutos</option>
                    <option value="h">Horas</option>
                    <option value="dias">Dias</option>
                    <option value="meses">Meses</option>
                    <option value="anos">Anos</option>
                </select>
            </div>
          </div>
        `;
        return this;
    },
    valor:function(){
     
      this.content += `
        <div class="col-md-6">
          <div class="input-group">
              <span class="input-group-addon m-bot15 btn-white">
                  <strong>Valor</strong>
              </span> <input autocomplete="on" class="form-control valor" placeholder="Valor do Recibo" maxlength="15">
          </div>
        </div>
        `;
        return this;
    },
    quantidade:function(){
     
      this.content +=  `
          <div class="col-md-6">
              <div class="input-group m-bot15">
                  <span class="input-group-addon m-bot15 btn-white">
                      <strong>Qtd.</strong>
                  </span> <input autocomplete="on" class="form-control quantidade" placeholder="Quantidade" maxlength="5">
              </div>
          </div>`;
        return this;
    },
    generate:function(target){ 
      const el = document.createElement('div');    
      el.innerHTML = this.html()
      document.getElementById(target)?.appendChild(el);    
    },
  
  }