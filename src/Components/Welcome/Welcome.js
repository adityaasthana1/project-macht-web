import React from "react";
import "./Welcome.css";
import logo from "../../Img/macht-logo.png"



let Welcome = () => {
    return <div className="Welcome">
        {/* Replace with a background image */}

        <img src={logo} alt="Hero" className="mainImage"></img>

    </div>
}

export default Welcome;