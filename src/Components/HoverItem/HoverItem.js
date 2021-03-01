import React from "react";
import { useState } from "react";

let HoverItem = () => {
    let [class , setClass ]= useState

    return <li onMouseLeave={() => { console.log("enter") }} onMouseEnter={() => { console.log("leave") }}>
        <a href="#">Home</a>
        <span class="hover">

        </span>
    </li >
}

export default HoverItem;