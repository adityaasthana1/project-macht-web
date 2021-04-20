import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

let Initialte = (set) => {
    set("hover ini");
}

let DeInitialte = (set) => {
    set("hover");
}


let NavItem = (props) => {
    let [cssClass, setClass] = useState("hover");

    return <li className="nav-item" onClick={props.onClick}>
        <div className="Info" onMouseEnter={() => { Initialte(setClass) }} onMouseLeave={() => { DeInitialte(setClass) }}>
            <Link to={props.to} className="NavLinks">{props.data}</Link>
        </div>
        <span class={cssClass}></span>

    </li >
}

export default NavItem;