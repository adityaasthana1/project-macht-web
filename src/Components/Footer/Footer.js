import React from "react";
import "./Footer.css";
import TextField from "@material-ui/core/TextField";

let Footer = () => {
    const styles = {
        textfield: {
            fontSize: 500,
        }
    }

    return <div className="Footer">
        <div className="Form">
            <form>
                <TextField id="standard-basic" inputStyled={styles.textfield} label="Standard" />
                <TextField id="Filled" label="name"></TextField>
            </form>
        </div>
        <div>
            <h2>Contact Info</h2>
        </div>


    </div>
}

export default Footer;