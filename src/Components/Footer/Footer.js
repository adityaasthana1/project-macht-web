import React from "react";
import "./Footer.css";

let Footer = () => {
    return <div className="Footer">
        <div className="Form">
            <form>
                <label>
                    <input type="text" name="name"></input>
                </label>
                <label>
                    <input type="text" name="Email"></input>
                </label>
                <br></br>
                <label>
                    <input type="text" name="Message"></input>
                </label>
            </form>
        </div>
        <div>
            <h2>Contact Info</h2>
        </div>


    </div>
}

export default Footer;