import React from "react";
import Products from "../../Data/Products";
import "./PnD.css";
import prodImg from "../../Img/right-image.png"

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
    console.log(ProductPanels());
    return <div className="Product">
        <div>
            <h1>Our upcoming product line-up</h1>
            <p>Along with our product we offer different functionalaties and features</p>
            {ProductPanels()}
        </div>

        <div>
            <img src={prodImg} className="image"></img>
        </div>
    </div>
}

export default PnD;