import React from 'react';
import About from '../../Components/About/About';
import Navbar from "../../Components/Navbar/Navbar"
import Welcome from "../../Components/Welcome/Welcome"


// Home page 

const Home = () => {
  return <div className="Home">
    <Navbar></Navbar>
    <Welcome></Welcome>
    <About></About>
  </div>
};

export default Home;
