import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import App from './App';



 /*Vc não pode regar 2 elementos adjacentes dentro do Root pois irá dar erro
  e nao vai exibir, para isso crie uma div e coloque cada um dos elementos dentro da sua propria div*/

/*aqui no react tudo que vc coloca dentro de um par de chaves vira um javSCRIPT */

  //<ul> //lista não ordenada

ReactDOM.render(
  
<App></App>,

  document.getElementById('root')
);

