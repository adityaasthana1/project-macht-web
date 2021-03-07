import React from "react";
import Navbar from "../../Components/Navbar/Navbar"
import Profile from "../../Components/Profile/Profile"
import "./profilepage.css"
// import logo from "../../Img/temp.jpg"
import profileData from "../../Data/Profiles"
import fire from "../../Scripts/Fire"

let generateCards = (users) => {

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

    console.log(fire.getUser());
    return <div className="teams-page">
        <Navbar></Navbar>
        <div className="team-header">Meet The Team</div>
        <div className="profile-page">
            <div className="h-profile">
                {generateCards(profileData)}
                {/* <Profile name="data" src={logo} info="some lorem data"></Profile> */}
            </div>
        </div>
    </div>
}

export default Teams;