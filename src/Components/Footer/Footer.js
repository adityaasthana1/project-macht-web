import React from "react";
import "./Footer.css";
import TextField from "@material-ui/core/TextField";


// import classes from "*.module.css";


let Footer = (props) => {

    return <div className="Footer">
        <div className="Form">
            <form>
                <div>
                    <TextField
                        label="name"
                        variant="filled"
                        size="large"
                        className="textField"
                        inputProps={{ style: { fontSize: 15 } }} // font size of input text
                        InputLabelProps={{ style: { fontSize: 15 } }}
                    ></TextField>
                    <TextField
                        label="Email"
                        variant="filled"
                        size="large"
                        className="textField"
                        inputProps={{ style: { fontSize: 15 } }} // font size of input text
                        InputLabelProps={{ style: { fontSize: 15 } }}
                    ></TextField>
                </div>
                <div className="textField">
                    <TextField
                        label="Email"
                        variant="filled"
                        size="large"
                        className="textArea"
                        inputProps={{ style: { fontSize: 15, height: 100 } }}  // font size of input text
                        InputLabelProps={{ style: { fontSize: 15 } }}
                        multiline

                    ></TextField>

                </div>
            </form>
        </div>
        <div>
            <h2>Contact Info</h2>
        </div>


    </div >
}

export default Footer;