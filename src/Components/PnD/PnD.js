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
        panel = <div key={e.id} className="pndHolder">
            <h3 className="pndProdHeader">{e.product}</h3>
            <p className="pndDesc">{e.desc}</p>
        </div>

        Panels.push(panel);
    })

    return Panels;
}

let PnD = () => {

    return <div className="Product">

        <Fade left cascade>
            <div className="pndCont">
                <h1 className="large">Our upcoming product line-up</h1>
                <p className="pndHolder">Along with our product we offer different functionalaties and features</p>
                {ProductPanels()}
            </div>
        </Fade>

        <Fade right >
            <div className="pndCont">
                <img src={prodImg} className="image" alt="product and design"></img>
            </div>
        </Fade>

    </div>
}

export default PnD;