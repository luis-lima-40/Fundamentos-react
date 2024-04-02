/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import "./App.css"

import Primeiro from './components/Primeiro'
import Segundo from './components/Segundo';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';


export default props =>(

<div className = "App">

<Card titulo="Primeiro Componente X">
    <Primeiro />
</Card>

<Card titulo="Exercicio X">
    Conteudo
</Card>

<Card titulo="ComFilhos">
    <ComFilhos>
        <ul> 
            <li> Ana </li>
            <li> Bia </li>
            <li> Carlos </li>
            <li> Daniel </li>
        </ul>
    </ComFilhos>
</Card>
   
<Card titulo="Primeiro">
    <Primeiro></Primeiro>
</Card>

<Card titulo="Segundo">
    <Segundo></Segundo>
</Card>

<Card titulo="ComParametro">
    <ComParametro
        titulo="Esse é o titulo"
        subtitulo="Esse é o subtitulo">
    </ComParametro>

    <ComParametro
        titulo="Esse é uma nova intancia do ComParametro"
        subtitulo="Esse é o subtitulo 2 da nova instancia"
        >
    </ComParametro>
    </Card>
</div>
)