import React from "react";
import "./profile.css";

let Profile = (props) => {
    console.log(props);
    //     return <div classNameName="profile">
    //         <img classNameName="profile-image" src={props.src} alt="profile-pic"></img>
    //         <div classNameName="line"></div>
    //         <div>
    //             <h2 classNameName="profile-name">{props.name}</h2>
    //             <p classNameName="profile-desc">{props.desc}</p>
    //         </div>
    //     </div>
    let imgSrc = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg";
    return <figure classNameName="snip1344"><img src={imgSrc} alt="profile-sample1" className="background" /><img src={imgSrc} alt="profile-sample1" className="profile" />
        <figcaption>
            <h3>{props.name}<span>{props.desc}</span></h3>
            <div className="icons"><a href="#"><i className="ion-social-reddit-outline"></i></a><a href="#"> <i className="ion-social-twitter-outline"></i></a><a href="#"> <i className="ion-social-vimeo-outline"></i></a></div>
        </figcaption>
    </figure>

}

export default Profile;