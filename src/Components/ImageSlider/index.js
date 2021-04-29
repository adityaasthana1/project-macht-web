import React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "./slider-animations.css";
import "./styles.css";
import { AiOutlineArrowLeft } from "react-icons/ai";


import { useHistory } from "react-router";




const content = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/ledautomation-1f46e.appspot.com/o/Carousel%2F1.jpg?alt=media&token=23558aeb-3661-46ec-8749-a92ea945fffd",
  },

];


let carouselGen = (props) => {
  let x = [];
  for (let key in props.content) {
    x.push(<div
      key={key}
      className="slider-content"
      style={{ background: `url('${props.content[key]}') no-repeat center center` }}
    >

    </div>)
  }

  return x;
}


const ImageSlider = (props) => {

  let history = useHistory();
  return <Slider className="slider-wrapper" autoplay={30000}  >
    {carouselGen(props)}
  </Slider>

};

export default ImageSlider;