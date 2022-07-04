import React from "react";
import '../../styles/semaforo.css';

const TrafficLight = ({handleClic0, handleClic1, handleClic2, alto, precaucion, pase}) => {
    return (
    <div className="container col-3">
        <div className="row d-flex justify-content-center">
            <div id="semaforo" className="col-3 bg-dark justify-content-center">
                <div className="row d-flex justify-content-center">
                    <div onClick={handleClic0} id="alto" className={alto}></div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div onClick={handleClic1} id="precaucion" className={precaucion}></div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div onClick={handleClic2} id="pase" className={pase}></div>
                </div>
            </div>
        </div>
    </div>
    )
};

TrafficLight.defaultProps = {
    alto : 'alto',
    precaucion: 'precaucion',
    pase: 'pase'
}

export default TrafficLight;