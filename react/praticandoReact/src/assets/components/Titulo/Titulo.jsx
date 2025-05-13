import React from "react"
import './Titulo.css'

const Titulo = ({ nome = '' }) => {
    return (
        <h1 className="titulo">Red dead redemption 2{nome}</h1>
    )
}

export default Titulo