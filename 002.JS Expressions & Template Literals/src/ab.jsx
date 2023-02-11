import React from "react";

const fname = "Viren";
const lname = "Ribadiya";
const num = 7;
const currentDate = new Date();
const year =currentDate.getFullYear();


function Abcd() {
    return (
    <div>
        <h1>Hello {fname + " " + lname}!</h1>
        {/* <h1>Hello {fname} {lname}!</h1> */}
        <p>Your lucky number is {num*Math.floor(Math.random()*10)}.</p>
        <p>Copyright {year}</p>
    </div>
    );
}

export default Abcd;