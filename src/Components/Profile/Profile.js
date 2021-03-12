import React from "react";
import "./profile.css";

let Profile = (props) => {

    //     return <div className="profile">
    //         <img className="profile-image" src={props.src} alt="profile-pic"></img>
    //         <div className="line"></div>
    //         <div>
    //             <h2 className="profile-name">{props.name}</h2>
    //             <p className="profile-desc">{props.desc}</p>
    //         </div>
    //     </div>

    return <figure class="snip1344"><img src={props.img} alt="profile-sample1" class="background" /><img src={props.img} alt="profile-sample1" class="profile" />
        <figcaption>
            <h3>{props.name}<span>{props.desc}</span></h3>

        </figcaption>
    </figure>

}

export default Profile;