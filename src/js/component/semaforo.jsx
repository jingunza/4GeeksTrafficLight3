import React, { useState } from "react";
import '../../styles/semaforo.css';

import Foco from './foco.jsx';

const TrafficLight = () => {
    /*----------useState------------------------------------*/
    const [lightsOn, setLightsOn] = useState(0);
    
    /*---------HTML-----------------------------------------*/
    return (
    <div className="container col-3">
        <div className="row d-flex justify-content-center">
            <div id="semaforo" className="col-3 bg-dark justify-content-center">
                <Foco clique={()=>setLightsOn('red')} color="red" estado={(lightsOn=='red')? "active" : "inactive"} />
                <Foco clique={()=>setLightsOn('yellow')} color="yellow" estado={(lightsOn=='yellow')? "active" : "inactive"} />
                <Foco clique={()=>setLightsOn('green')} color="green" estado={(lightsOn=='green')? "active" : "inactive"} />
            </div>
        </div>
    </div>
    )
};

export default TrafficLight;