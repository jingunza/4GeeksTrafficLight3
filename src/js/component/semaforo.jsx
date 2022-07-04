import React, { useState } from "react";
import '../../styles/semaforo.css';

import Foco from './foco.jsx';

const TrafficLight = () => {
    const [lightsOn, setLightsOn] = useState('');
    const handleClic = (color) => {setLightsOn(color)};
    return (
    <div className="container col-3">
        <div className="row d-flex justify-content-center">
            <div id="semaforo" className="col-3 bg-dark justify-content-center">
                <Foco clique={handleClic('red')}/**/ clase={(lightsOn=='red') ? 'alto-on' : 'alto'} />
                <Foco clique={handleClic('yellow')}/**/ clase={(lightsOn=='yellow') ? 'precaucion-on' : 'precaucion'} />
                <Foco clique={handleClic('green')}/**/ clase={(lightsOn=='green') ? 'pase-on' : 'pase'} />
            </div>
        </div>
    </div>
    )
};

export default TrafficLight;