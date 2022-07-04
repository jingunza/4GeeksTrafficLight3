//import react into the bundle
import React, {useState} from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/semaforo.jsx";

const App = () => {
    const [lightsOn, setLightsOn] = useState(null);
    
    /*funciones para el manejo del clic*/
    const handleClic0 = () => {
        setLightsOn(0);
    };
    const handleClic1 = () => {
        setLightsOn(1);
    };
    const handleClic2 = () => {
        setLightsOn(2);
    };
    /*---------- HTML---------------- */
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div id="poste" className="col-1 bg-dark"></div>
            </div>
            <div className="row d-flex justify-content-center">
                <TrafficLight
                    handleClic0={handleClic0}
                    handleClic1={handleClic1}
                    handleClic2={handleClic2}
                    alto={(lightsOn==0)? "alto-on" : "alto"}
                    precaucion={(lightsOn==1) ? "precaucion-on" : "precaucion"}
                    pase={(lightsOn==2) ? "pase-on" : "pase"}
                />
            </div>
        </div>
    );
};

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
