import React from "react";
import "./Lista.css"

const Lista = ({itens}) => {
    return (
        <ul className="lista">
            {itens.map((tarefa, index) =>
                <li key={index}>{tarefa}</li>
            )}
        </ul>
    )
}

export default Lista