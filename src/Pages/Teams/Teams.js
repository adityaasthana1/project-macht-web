import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar"
import Profile from "../../Components/Profile/Profile"
import "./profilepage.css"
// import logo from "../../Img/temp.jpg"
import profileData from "../../Data/Profiles"
import fire from "../../Scripts/Fire"
import { CircularProgress } from "@material-ui/core";
import { Loader } from "semantic-ui-react";

let generateCards = (users) => {
    console.log("user", users);
    if (!users) {
        return <div class="lds-ripple"><div></div><div></div></div>
    }

    let cardsRow = [];
    let counter = 0;


    for (let data in users) {
        cardsRow.push(<Profile name={users[data].name} desc={users[data].desc} key={counter}></Profile>);
        counter++;
    }

    return cardsRow;
}

let Teams = () => {
    // generateCards(profileData);
    let [user, setUser] = useState();

    useEffect(async () => {
        setUser(await fire.getUser());
    }, [])

    return <div className="teams-page">
        <Navbar></Navbar>
        <div className="team-header">Meet The Team</div>
        <div className="profile-page">
            <div className="h-profile">
                {generateCards(user)}
                {/* <Profile name="data" src={logo} info="some lorem data"></Profile> */}
            </div>
        </div>
    </div>
}

export default Teams;