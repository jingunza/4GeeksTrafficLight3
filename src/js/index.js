//import react into the bundle
import React, {useState} from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/semaforo.jsx";

const App = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div id="poste" className="col-1 bg-dark"></div>
            </div>
            <div className="row d-flex justify-content-center">
                <TrafficLight />
            </div>
        </div>
    );
};

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
