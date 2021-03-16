import React from 'react';
import About from '../../Components/About/About';
import Navbar from "../../Components/Navbar/Navbar";
import Welcome from "../../Components/Welcome/Welcome";
import PnD from "../../Components/PnD/PnD";
import VnF from '../../Components/VnF/VnF';
// import Footer from "../../Components/Footer/Footer";
import "./home.css";
import Carousel from '../../Components/carousel/index';
import FooterPage from '../../Components/Footer/Footer2';
import ScrollAnimation from 'react-animate-on-scroll';

// import Car from '../../Components/Slider';

// import mButton from "@material-ui/core/Button";

// Home page 

const Home = () => {

  return <div className="conHome">
    <div className="Home">
      <Navbar></Navbar>

      <Welcome></Welcome>
      <About />

      <PnD></PnD>
      <VnF></VnF>
      <ScrollAnimation animateIn="fadeIn">
        Some Text
      </ScrollAnimation>
      <Carousel />
    </div>

    <FooterPage />
  </div>
};

export default Home;
