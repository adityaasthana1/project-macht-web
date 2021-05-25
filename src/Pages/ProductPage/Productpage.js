import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import fire from "../../Scripts/Fire";
import Loader from "../../Components/Loader/Loader";
import "./Productpage.css";
import { FiLinkedin, FiArrowLeft } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";

import Slide from 'react-reveal/Fade';
import FooterPage from "../../Components/Footer/Footer2";
import ImageSlider from "../../Components/ImageSlider";
import CustomFooter from "../../Components/Footer/CustomFooter";
import { Fade } from "@material-ui/core";




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
                        <div className="ProdHeadBar">
                            <FiArrowLeft className="ProdGoBack" onClick={goBack} ></FiArrowLeft>
                            <div className="Prod-loc">
                                Product  <IoMdArrowDropright></IoMdArrowDropright>  {product.Name}
                            </div>
                        </div>
                        <div className="Prodline"></div>
                        {/* Head End */}


                        <div className="ProdInfo">
                            <div className="ProdLeft">
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

                {/* <FooterPage></FooterPage> */}
                <CustomFooter></CustomFooter>
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