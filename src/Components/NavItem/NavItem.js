import React, { useState } from "react";
import "./NavItem.css";

let Initialte = (set) => {
    console.log("Initiate");
    set("hover ini");
}

let DeInitialte = (set) => {
    set("hover");
}


let NavItem = (props) => {
    let [cssClass, setClass] = useState("hover");

    return <li>
        <a href="#" className="Info" onMouseEnter={() => { Initialte(setClass) }} onMouseLeave={() => { DeInitialte(setClass) }}>{props.data}</a>
        <span class={cssClass}></span>
    </li>
}

export default NavItem;