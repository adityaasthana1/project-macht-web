import React, { useState } from "react";

let NavItem = () => {
    let [cssClass, setClass] = useState("hover");

    return <li>
        <a href="#">Contact Us</a>
        <span class={cssClass}></span>
    </li>
}

export default NavItem;