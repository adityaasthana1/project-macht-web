import React from 'react';
import About from '../../components/About/About';
import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcome/Welcome";
import PnD from "../../components/PnD/PnD";
import VnF from '../../components/VnF/VnF';
import Footer from "../../components/Footer/Footer";


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
