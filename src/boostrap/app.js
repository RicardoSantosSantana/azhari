import { mask } from "./mask.js";
import { estados_cidades } from "./cidades.js";
import { orcamento } from "./orcamento.js";
 

 export const app = {
     mask,
     estados_cidades,
     orcamento,
     partial: async function (template) {   
            return await fetch(window.location.href +`src/template/${template}.html` )
                .then(response=> response.text())
                .then(html=>document.getElementById(template).innerHTML= html)
     }
     ,
     init: () => {
         mask.focus();
         mask.lostfocus("blur");
         mask.lostfocus("mouseleave");
         mask.cep();
         mask.telefone();
         estados_cidades.clickEstado(); 
     }
 };

 (function($){ window.addEventListener("load",()=>$.init()) ; })(app)
