import { GitHub } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import "./profile.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { Link } from "react-router-dom";

let Profile = (props) => {
    let history = useHistory();

    //     return <div className="profile">
    //         <img className="profile-image" src={props.src} alt="profile-pic"></img>
    //         <div className="line"></div>
    //         <div>
    //             <h2 className="profile-name">{props.name}</h2>
    //             <p className="profile-desc">{props.desc}</p>
    //         </div>
    //     </div>

    // return <figure class="snip1344" onClick={() => {
    //     history.push(`/members/${props.id}`);
    // }}>
    //     <img src={props.img} alt="profile-sample1" class="background" /><img src={props.img} alt="ERR : No profile " class="profile" />
    //     <figcaption>
    //         <h3>{props.name}<span>{props.desc}</span></h3>
    //     </figcaption>
    // </figure>

    // console.log("data", props)
    // console.log("asdfadsf", pr / ops);
    return <div className="ProfileCont">
        <img className="ProfilePic" src={props.img} alt="profile-pic"></img>
        <h3 className="ProfileName">{props.name}</h3>
        <p className="ProfileDesc">{props.desc}</p>
        <div className="SocialIcons">
            {props.git ? <a href={props.git}><AiFillGithub className="iconsHover" /></a> : null}
            {props.insta ? <a href={props.insta}><AiFillInstagram className="iconsHover" /></a> : null}
            {props.linked ? <a href={props.linked}><AiFillLinkedin className="iconsHover" /> </a> : null}
        </div >
    </div >

}

export default Profile;