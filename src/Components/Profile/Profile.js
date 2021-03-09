import React from "react";
import "./profile.css";

let Profile = (props) => {
    console.log(props);
    //     return <div className="profile">
    //         <img className="profile-image" src={props.src} alt="profile-pic"></img>
    //         <div className="line"></div>
    //         <div>
    //             <h2 className="profile-name">{props.name}</h2>
    //             <p className="profile-desc">{props.desc}</p>
    //         </div>
    //     </div>

    return <figure class="snip1344"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg" alt="profile-sample1" class="background" /><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg" alt="profile-sample1" class="profile" />
        <figcaption>
            <h3>{props.name}<span>{props.desc}</span></h3>
            <div class="icons"><a href="#"><i class="ion-social-reddit-outline"></i></a><a href="#"> <i class="ion-social-twitter-outline"></i></a><a href="#"> <i class="ion-social-vimeo-outline"></i></a></div>
        </figcaption>
    </figure>

}

export default Profile;