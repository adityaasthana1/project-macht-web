//Header Component
import React from "react";
import "./Navbar.css";


//Header Component
let Header = () => {
    return <div className="Header">
        <h1 className="Title">Project Macht</h1>
        <div className="Navigation">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li className="#">Product</li>
                {/* Create Drop Down for product with BootStrap*/}
                <li>Team</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
}

export default Header;