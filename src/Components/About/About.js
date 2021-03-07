import React from "react";
import Button from "../Button/Button";
import "./About.css";
import about from "../../Img/AboutA.jpg"
import neural from "../../Img/neural.png"


let About = () => {

    return <div className="About">
        {/* first Section */}
        <div className="sec">
            <div>
                <h1>Who are we?</h1>
                <p>An initiative to build a highly customizable AI-based smart assistant
                and along with it, a suite of interconnected devices that provide ease
                in our day to day lives for a fraction of the cost of their commercial
            counterparts. </p>
                <Button text="FIND OUT MORE"></Button>
            </div>
            <div>
                <img src={neural} className="image" alt="neural"></img>
            </div>
        </div>

        <div className="sec dark">
            <div>
                <img src={about} className="image" alt="about"></img>
            </div>
            <div>
                <h1>We bring ease to your daily life</h1>
                <p>Our aim here at Project Macht is to give access to revolutionary technology to people
                who cannot afford it. With this aim driving us, we have created a complete solution that
                includes a smart assistant that can do whatever a commercial AI-based assistant do and much more;
                a complete home automation suite that not only lets you monitor your home, but also control it in
                real-time, and a Computer Vision-based solution that with the help of the AI monitors the complete premises
                for suspicious activity and even has built-in object, facial and emotion recognition. With the cross-platform operation,
                there is nowhere in the world that you can go and not be in control of your home.
                </p>

                <Button text="Discover More"></Button>
            </div>
        </div>

    </div>
}

export default About;