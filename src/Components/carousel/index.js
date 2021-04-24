import React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "./slider-animations.css";
import "./styles.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

import officeImg from "./images/officeCar.jpg"


const content = [
  {
    title: "Affordability",
    description:
      "Lower is better; don't let anyone tell you otherwise when it comes to price. We made our products with the sole aim of impacting millions of lives and our automation solutions are the cheapest on the market: priced at half or even one-third the price of commercial solutions",
    button: "Read More",
    image: "https://firebasestorage.googleapis.com/v0/b/ledautomation-1f46e.appspot.com/o/Carousel%2F1.jpg?alt=media&token=23558aeb-3661-46ec-8749-a92ea945fffd",

  },
  {
    title: "Customizability",
    description:
      "We offer customizability as no one else does. Almost every part of our software can be tailored to your individual use and with regular updates, you will never miss out on new features.",
    button: "Discover",
    image: "https://firebasestorage.googleapis.com/v0/b/ledautomation-1f46e.appspot.com/o/Carousel%2F2.jpg?alt=media&token=cbc0531a-9f5e-4fdc-a94e-7805b448b236",

  },
  {
    title: "Zero maintenance, plug and play design",
    description:
      "Once installed, you can just forget our devices are there. An entire home can be set up in two days or even less in some cases. You don't even need a professional for an install, with our easy to use manuals and intuitive design, you can do it yourselves!",
    button: "Buy now",
    image: "https://firebasestorage.googleapis.com/v0/b/ledautomation-1f46e.appspot.com/o/Carousel%2F4.jpg?alt=media&token=b7354b89-a47d-4f80-9150-53d47f2a1b41",

  },
  {
    title: "Cross-platform Usability",
    description:
      "Our AI is available across all platforms, be it on your smartphone, tablet or desktop, which makes it easy for you to monitor and control your space from anywhere.",
    button: "Buy now",
    image: "https://firebasestorage.googleapis.com/v0/b/ledautomation-1f46e.appspot.com/o/Carousel%2F4.jpg?alt=media&token=b7354b89-a47d-4f80-9150-53d47f2a1b41",

  }
];



const Carousel = () => (
  <div>

    <Slider className="slider-wrapper" autoplay={30000}  >
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>

        </div>
      ))}
    </Slider>



  </div>
);

export default Carousel;