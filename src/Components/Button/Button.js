import React from "react";
import "./StyleButton.css";
import MatButton from "@material-ui/core/Button";

let Button = (props) => {
    return <MatButton variant="contained"
        className="Button"

        onClick={props.onClick}>
        {props.text}
    </MatButton>





}

export default Button;