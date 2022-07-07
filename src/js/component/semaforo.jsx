import React, { useState } from "react";
import '../../styles/semaforo.css';

import Foco from './foco.jsx';

const TrafficLight = (props) => {
    /*----------useState------------------------------------*/
    const [lightColor, setLightColor] = useState(0);
    
    /*---------HTML-----------------------------------------*/
    return (
    <div>
        <div className="container col-3">
            <div className="row d-flex justify-content-center">
                <div id="semaforo" className="col-3 bg-dark justify-content-center">
                    <Foco clique={()=>setLightColor('red')} color="red" estado={(lightColor=='red')? "active" : "inactive"} />
                    <Foco clique={()=>setLightColor('yellow')} color="yellow" estado={(lightColor=='yellow')? "active" : (lightColor=='other')? props.interm : "inactive"} />
                    <Foco clique={()=>setLightColor('green')} color="green" estado={(lightColor=='green')? "active" : "inactive"} />
                </div>
            </div>
        </div>
        <div className="row align-items-center" style={{height: '100px'}}>
            <div className="col-2 text-center container">
                <button onClick={()=>{setLightColor('other')}} className="btn btn-warning text-danger">
                    Intermitencia
                </button>
            </div>
        </div>
    </div>
    )
};

export default TrafficLight;