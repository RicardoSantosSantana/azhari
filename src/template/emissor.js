function HTML_emissor(objEmissor) {

    return ` <div class="principal">
            <div class="imagem" id="g_logo"></div>
            <div class="titulo">
                <p class="orcamento"> Or&ccedil;amento &nbsp; N&#176;&nbsp; <span id="g_numeroRecibo">${objEmissor.numero}</span></p>
                <p class="emissor"> <span id="e_nome">${objEmissor.nome}</span></p>
                <p class="emissor"> <span id="e_email">${objEmissor.email}</span></p>
                <p class="emissor"> <span id="e_website">${objEmissor.website}</span></p>
                <p class="emissor"> <span id="e_telefone">${objEmissor.telefone}</span></p>
            </div>
        </div>
        <div style='clear:both;border-bottom: 1px solid #808080;margin-bottom:10px;'></div>`;

}