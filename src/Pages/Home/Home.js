import React from 'react';
import About from '../../Components/About/About';
import Navbar from "../../Components/Navbar/Navbar";
import Welcome from "../../Components/Welcome/Welcome";
import PnD from "../../Components/PnD/PnD";
import VnF from '../../Components/VnF/VnF';
import Footer from "../../Components/Footer/Footer";
import "./home.css";
// import mButton from "@material-ui/core/Button";

// Home page 

const Home = () => {
  return <div className="Home">
    <Navbar></Navbar>
    <Welcome></Welcome>
    <About></About>
    <PnD></PnD>
    <VnF></VnF>
    <Footer></Footer>

  </div>
};

export default Home;
