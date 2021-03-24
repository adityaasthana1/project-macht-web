import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar"
import Profile from "../../Components/Profile/Profile"
import "./profilepage.css"
// import logo from "../../Img/temp.jpg"
import profileData from "../../Data/Profiles"
import fire from "../../Scripts/Fire"
import { CircularProgress } from "@material-ui/core";
import Loader from "../../Components/Loader/Loader";

import Slide from 'react-reveal/Fade';
import FooterPage from "../../Components/Footer/Footer2";

let generateCards = (users) => {
    // console.log("user", users);
    if (!users) {
        return <Loader></Loader>
    }

    let cardsRow = [];
    let counter = 0;


    for (let data in users) {
        cardsRow.push(<Profile name={users[data].name} desc={users[data].desc} img={users[data].img} key={counter}></Profile>);
        counter++;
    }

    return <div><div className="team-header">Meet The Team</div>

        <div className="profile-page">

            <div className="h-profile">
                <Slide bottom>{cardsRow}</Slide>

            </div>


        </div>

        <FooterPage></FooterPage>
    </div>
}

let Teams = () => {
    // generateCards(profileData);
    let [user, setUser] = useState();

    useEffect(async () => {
        setUser(await fire.getUser());
    }, [])

    return <div className="teams-page">
        <Navbar></Navbar>


        {generateCards(user)}
        {/* <Profile name="data" src={logo} info="some lorem data"></Profile> */}

    </div>
}

export default Teams;