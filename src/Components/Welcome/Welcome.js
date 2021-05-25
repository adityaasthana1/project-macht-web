import React from "react";
import "./Welcome.css";
import logo from "../../Img/macht-logo.png"
import graph from "../../vid/graph.mp4"
import secLogo from '../../Img/projectmacht.png'


let Welcome = () => {
    return <div className="Welcome">

        <img src={secLogo} alt="Hero" className="mainImage"></img>

    </div>
}

export default Welcome;