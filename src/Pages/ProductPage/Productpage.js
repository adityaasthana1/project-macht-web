import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import fire from "../../Scripts/Fire";
import Loader from "../../Components/Loader/Loader";
import "./Productpage.css";
import { FiLinkedin, FiArrowLeft } from "react-icons/fi";

import Slide from 'react-reveal/Fade';
import FooterPage from "../../Components/Footer/Footer2";
import ImageSlider from "../../Components/ImageSlider";




let Productpage = (props) => {
    const { prod } = useParams();
    let [product, setProduct] = useState(null);
    let [upd, setUpd] = useState(-1);

    let history = useHistory();

    let goBack = () => {
        history.goBack();
    }

    let renderProd = () => {
        if (product == null) {
            return <div className="loader">
                <Loader></Loader>
            </div>
        }
        else {
            // console.log(product.img);

            return <Slide bottom>
                <div className="Prodpage">
                    <div className="ProdCont">

                        {/* Head */}
                        <FiArrowLeft className="ProdGoBack" onClick={goBack} ></FiArrowLeft>
                        <div className="Prod-loc">
                            Product  /  {product.Name}
                        </div>
                        <div className="Prodline"></div>
                        {/* Head End */}

                        {/* <div className="ProdInfo">
                            <div className="ProdHolder">
                                <img className="ProdImg" src={product.img} alt={product.Name}></img>
                            </div>
                            <div className="ProdMainInfo">
                                <div className="ProdHead">{product.Name}</div>
                                <div className="ProdMain">{product.main}</div>
                                <div class='button -dark center customButton'>BUY</div>

                            </div>

                        </div>
                        <div className="ProdDesc">
                            {product.Data}
                        </div> */}


                        <div className="ProdInfo">
                            <div className="ProdLeft">
                                {/* <img className="ProdImg" src={product.img} alt={product.Name}></img> */}
                                <ImageSlider content={product.img}></ImageSlider>

                            </div>

                            <div className="ProdRight">
                                <div className="ProdHead">{product.Name}</div>
                                <div className="ProdData">{product.main}</div>
                                <div className="ProdBuyCont">
                                    <div class='ProdButton'>BUY</div>
                                </div>


                            </div>
                        </div>

                        <div className="ProdData">
                            {product.Data}
                        </div>



                    </div>
                </ div>

                <FooterPage></FooterPage>
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