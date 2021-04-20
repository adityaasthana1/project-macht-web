import React from "react";
import "./Loader.css";
import Page from 'react-page-loading';


let Loader = () => {
    console.log("Loadcer")
    return <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}></Page>
}

export default Loader;