import React from "react";

const Foco = (props) => {
    return (
            <div className="row d-flex justify-content-center">
                <div onClick={props.clique} className={props.clase}></div>
            </div>
    )
};

export default Foco;