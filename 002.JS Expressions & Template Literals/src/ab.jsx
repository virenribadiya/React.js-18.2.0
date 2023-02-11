import React from "react";

const fname = "Viren";
const lname = "Ribadiya";
const num = 7;

function Abcd() {
    return (
    <div>
        <h1>Hello {fname + " " + lname}!</h1>
        {/* <h1>Hello {fname} {lname}!</h1> */}
        <p>Your lucky number is {num*Math.floor(Math.random()*10)}.</p>
    </div>
    );
}

export default Abcd;