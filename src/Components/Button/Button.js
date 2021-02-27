import React from "react";
import "./StyleButton.css";

let Button = (props) => {
    return <div className="Button" onClick={props.onClick}>
        {props.text}
    </div>
}

export default Button;