
export const orcamento = {

  id: "",
  Factory: function (){
    
    this.ramdomID();
     const content = this.title()+this.medida()+this.valor()+this.quantidade();

     return ` <div class="row list" id="lista-produtos_${this.id}">${content}</div>`;
  },
  ramdomID: function(){    
      const min = 200;
      const max = 2000;
      this.id = Math.floor(Math.random() * (max - min)) + min;    
  },
  title: function(){
      return `<div class="col-md-12 ">
        <div class="titulo"><span> Produto ou Serviço</span><span><button class="btn btn-danger" onclick="removeProduto(${this.id})">Remover</button></span></div> 
        <input type="text" autocomplete="on" class="form-control descricao" value="" id="descricao" placeholder="Nome do Produto ou Serviço" maxlength="50">
      </div>`;
  },
  medida:function(){
    return `
    <div class="col-md-12">
        <div class="input-group ">
            <span class="input-group-addon"><strong>Medida</strong></span>
            <select class="form-control" id="medida_1">
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
  },
  valor:function(){
    return `
    <div class="col-md-6">
      <div class="input-group">
          <span class="input-group-addon m-bot15 btn-white">
              <strong>Valor</strong>
          </span> <input autocomplete="on" class="form-control valor" value="" type="withnotitle" id="valor_1"
              placeholder="Valor do Recibo" maxlength="15">
      </div>
    </div>
    `;
  },
  quantidade:function(){
      return `
      <div class="col-md-6">
          <div class="input-group m-bot15">
              <span class="input-group-addon m-bot15 btn-white">
                  <strong>Qtd.</strong>
              </span> <input autocomplete="on" class="form-control quantidade" value="" type="withnotitle"
                  id="quantidade_1" placeholder="Quantidade" maxlength="5">
          </div>
      </div>`;
  },
  ADD:function(){
 
    const el = document.createElement('div');    
    el.innerHTML = this.Factory()
    document.getElementById('itens-produtos')?.appendChild(el);
    
  }
}


