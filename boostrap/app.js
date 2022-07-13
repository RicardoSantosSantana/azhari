 import { mask } from "./mask.js";
 import { estados_cidades } from "./cidades.js";

 export const app = {
     mask,
     estados_cidades,
     init: () => {
         mask.focus();
         mask.lostfocus();
         mask.cep();
         mask.telefone();
         estados_cidades.clickEstado();
     }
 }