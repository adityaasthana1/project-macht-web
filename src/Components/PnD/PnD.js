import React from "react";
import Products from "../../Data/Products";
import "./PnD.css";
import prodImg from "../../Img/right-image.png"

import Fade from 'react-reveal/Fade';


let ProductPanels = () => {
    // Products.forEach((e) => { console.log(e) });
    let Panels = [];
    let panel;


    Products.forEach((e) => {
        panel = <div key={e.id}>
            <h3>{e.product}</h3>
            <p>{e.desc}</p>
        </div>

        Panels.push(panel);
    })

    return Panels;
}

let PnD = () => {

    return <div className="Product">

        <Fade left cascade>
            <div>
                <h1 className="large">Our upcoming product line-up</h1>
                <p>Along with our product we offer different functionalaties and features</p>
                {ProductPanels()}
            </div>
        </Fade>

        <Fade right>
            <div>
                <img src={prodImg} className="image" alt="product and design"></img>
            </div>
        </Fade>

    </div>
}

export default PnD;