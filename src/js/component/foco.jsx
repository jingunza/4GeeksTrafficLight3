import React from "react";
import '../../styles/foco.css';

const Foco = (props) => {
    
    return (
            <div className="row d-flex justify-content-center">
                <div onClick={props.clique} className={`bombilla ${props.color} ${props.estado}`}></div>
            </div>
    )
};

export default Foco;