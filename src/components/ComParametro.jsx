/*como passar parametros para um componente em react */
import React from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export default  props =>
<>
    <h3>{props.titulo}</h3>
    <p>{props.subtitulo}</p>
    <p>{5+7}</p>
    <p>{Array(10).fill(3) }</p>

</>