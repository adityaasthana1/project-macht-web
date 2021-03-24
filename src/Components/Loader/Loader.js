import React from "react";
import "./Loader.css";
import Bar from "../Bar/BarLoader";
import Page from 'react-page-loading';

let Loader = () => {
    // return <div class="lds-ripple"><div></div><div></div></div>
    return <div >
        <Page loader={"bar"} color={"#A9A9A9"} size={4}>

        </Page>
    </div>

}

export default Loader;