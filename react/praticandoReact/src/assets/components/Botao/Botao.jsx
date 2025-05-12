import React from "react";
import "./Botao.css"

const Botao = ({ texto }) => {

    const handleClick = () => {
        window.open('https://www.youtube.com/watch?v=gmA6MrX81z4&pp=ygUMcmRyMiB0cmFpbGVy', '_blank');
    }

    return (
        <button className="botao" onClick={handleClick}>{texto}</button>
    )
}

export default Botao