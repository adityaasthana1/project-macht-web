import React from "react";
import "./profile.css";

let Profile = (props) => {
    return <div className="profile">
        <img className="profile-image" src={props.src}></img>
        <div className="line"></div>
        <div>
            <h2 className="profile-name">{props.name}</h2>
            <p className="profile-desc">{props.desc}</p>
        </div>
    </div>
}

export default Profile;