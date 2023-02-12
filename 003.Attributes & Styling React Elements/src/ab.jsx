import React from "react";

const image = "https://picsum.photos/200"
const customStyle = {
    color:"red",
    fontSize: "20px",
    border: "1px solid black"
}

const customStyle2 = {
    color: ""
}

const date = new Date();
const currentTime = date.getHours();

let greeting;

if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle2.color = "red";
} else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle2.color = "green";
} else {
    greeting = "Good Night";
    customStyle2.color = "blue";
}

function Abcd() {
    return (
    <div>
        <h1 style={customStyle}>Hello World!</h1>
        <h2 
        contentEditable="true"
        >My Favourite Food</h2>
        <img className="image-box" src={image} alt="" />
        <img className="image-box" src={image} alt="" />

        <h1 className="heading" style={customStyle2}>{greeting}</h1>
        
    </div>
    );
}

export default Abcd;