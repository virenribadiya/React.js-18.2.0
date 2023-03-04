import React from "react";
import Pie, {doublPi,triplePi}from "./components/Math";
import {add,subtract,multiply,divide} from "./components/calculator"

function App() {
    return (
    <div>
        <ul>
            <li>{Pie}</li>
            <li>{doublPi()}</li>
            <li>{triplePi()}</li>
            <li>{add(5,2)}</li>
            <li>{subtract(5,2)}</li>
            <li>{multiply(5,2)}</li>
            <li>{divide(5,2)}</li>
        </ul>
    </div>);
}

export default App;