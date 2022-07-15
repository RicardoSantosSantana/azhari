export const html = {
  medidas:  [
        { medida:"mts",   valor:"Metros"},
        { medida:"m²",    valor:"Metros Quadrados"},
        { medida:"m³",    valor:"Metro Cúbico"},
        { medida:"cm",    valor:"Centímetros"},
        { medida:"dz",    valor:"Dúzias"},
        { medida:"kg",    valor:"Quilo"},
        { medida:"gm",    valor:"Grama"},
        { medida:"km",    valor:"Quilômetros"},
        { medida:"unid",  valor:"Unidades"},
        { medida:"lts",   valor:"Litros"},
        { medida:"min",   valor:"Minutos"},
        { medida:"h",     valor:"Horas"},
        { medida:"dias",  valor:"Dias"},
        { medida:"meses", valor:"Meses"},
        { medida:"anos",  valor:"Anos"} 
  ],
    option_medidas:function(medida)  { 
        return this.medidas.map(el => `<option ${el.medida==medida?"selected":""}  value='${el.medida}'>${el.valor}</option>`).join('') 
    },    
    generate: function(produtosProxy){ 
      return produtosProxy?.data?.map( item => {
        return (`
                      <div class="row list lista" id="produto_${item.id}">
                      <input type="hidden" class="id"  value="${item.id}">
                          <div class="col-md-12 ">
                              <div class="titulo">
                                  <span> Produto ou Serviço</span>
                                  <span>
                                  <button class="btn btn-danger" onclick="removerProduto(${item.id})">Remover</button>
                                  </span>
                              </div>
                              <input type="text" autocomplete="off"   class="form-control descricao" value="${item?.descricao??""}"  placeholder="Nome do Produto ou Serviço" maxlength="50">
                          </div>
                          <div class="col-md-12">
                              <div class="input-group ">
                                  <span class="input-group-addon"><strong>Medida</strong></span>
                                  <select class="form-control medida"  >
                                      ${this.option_medidas(item.medida)}
                                </select>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="input-group">
                                  <span class="input-group-addon">
                                  <strong>Valor</strong>
                                  </span> <input autocomplete="on" class="form-control valor"  value="${item.valor}" placeholder="Valor do Recibo" maxlength="15">
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="input-group m-bot15">
                                  <span class="input-group-addon m-bot15 btn-white">
                                  <strong>Qtd.</strong>
                                  </span> <input autocomplete="on" class="form-control quantidade" value="${item.quantidade}" placeholder="Quantidade" maxlength="5">
                              </div>
                          </div>
                      </div>                                 
        `)}).join('');  
  },
    
}