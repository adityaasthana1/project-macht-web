import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import fire from "../../Scripts/Fire";
import Loader from "../../Components/Loader/Loader";
import "./Productpage.css";

import Slide from 'react-reveal/Fade';


let Productpage = (props) => {
    const { prod } = useParams();
    let [product, setProduct] = useState(null);
    let [upd, setUpd] = useState(-1);

    let renderProd = () => {
        if (product == null) {
            return <div className="loader">
                <Loader></Loader>
            </div>
        }
        else {

            return <Slide bottom>
                <div className="Prodpage">
                    <div className="ProdCont">
                        <h1>{product.Name}</h1>

                        <div className="Prodline"></div>

                        <div className="ProdInfo">
                            <div className="ProdHolder">
                                <img className="ProdImg" src={product.img} alt={product.Name}></img>
                            </div>
                            <div className="ProdMain">{product.main}</div>
                        </div>



                        <div className="ProdDesc">
                            {product.Data}
                        </div>
                    </div>
                </ div>
            </Slide>
        }
    }


    useEffect(async () => {

        setProduct(await fire.fetchProduct(prod));
    }, [upd]);

    console.log("ProdPage", upd);
    return <div>
        <Navbar setUpd={setUpd}></Navbar>
        {renderProd()}
    </div>

}

export default Productpage;