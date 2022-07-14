import { mask } from "./mask.js";
import { estados_cidades } from "./cidades.js";
import { orcamento } from "./orcamento.js";
 
 export const app = {
     mask,
     estados_cidades,
     orcamento,
     init: () => {
         mask.focus();
         mask.lostfocus("blur");
         mask.lostfocus("mouseleave");
         mask.cep();
         mask.telefone();
         estados_cidades.clickEstado();
     }
 };

 (function($){ window.addEventListener("load",()=>$.init());})(app)
