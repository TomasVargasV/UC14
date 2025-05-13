import React from "react";
import "./Paragrafo.css"

const Paragrafo = ({texto}) => {
    return (
        <p className="paragrafo">
            {texto}
        </p>
    )
}

export default Paragrafo