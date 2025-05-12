import React from "react";
import "./Imagem.css"

const Imagem = ({ link, alt = "imagem" }) => {
    return (
        <img className="imagem" src={link} alt={alt} />
    )
}

export default Imagem