import React from "react";
import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";


let Productpage = (props) => {
    const { prod } = useParams();
    console.log(prod, "ran");

    return <div>
        <Navbar></Navbar>
        {props.product}
    </div>

}

export default Productpage;