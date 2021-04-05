import React from "react";
import "./Welcome.css";
import logo from "../../Img/macht-logo.png"
import graph from "../../vid/graph.mp4"


let Welcome = () => {
    return <div className="Welcome">
        {/* Replace with a background image */}
        <video className="WelcmVideo" autoPlay loop muted>
            <source src={graph} type="video/mp4" />
        </video>
        <img src={logo} alt="Hero" className="mainImage"></img>

    </div>
}

export default Welcome;