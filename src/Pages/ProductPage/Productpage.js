import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import fire from "../../Scripts/Fire";
import Loader from "../../Components/Loader/Loader";
import "./Productpage.css";

let Productpage = (props) => {
    const { prod } = useParams();
    let [product, setProduct] = useState(null);

    let renderProd = () => {
        if (product == null) {
            return <div className="loader">
                <Loader></Loader>
            </div>
        }
        else {
            console.log(product);
            return <div> {product.Name}</ div>
        }
    }


    useEffect(async () => {
        setProduct(await fire.fetchProduct(prod));
    }, []);


    return <div>
        <Navbar></Navbar>
        {renderProd()}
    </div>

}

export default Productpage;