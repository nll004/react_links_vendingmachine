import React from "react";
import "./Snack.css";

function Snack({name, price}){
    return (
        <div className="Snack">
            <p><b>Name:</b> {name}</p>
            <p><b>Price:</b> {price}</p>
        </div>
    )
}


export default Snack
