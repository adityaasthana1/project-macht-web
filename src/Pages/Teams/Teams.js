import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar"
import Profile from "../../Components/Profile/Profile"
import "./Teams.css"
// import logo from "../../Img/temp.jpg"
// import profileData from "../../Data/Profiles"
import fire from "../../Scripts/Fire"
// import { CircularProgress } from "@material-ui/core";
import Loader from "../../Components/Loader/Loader";

// import Slide from 'react-reveal/Fade';
// import FooterPage from "../../Components/Footer/Footer2";
import CustomFooter from "../../Components/Footer/CustomFooter";

let generateCards = (users) => {
    // console.log("user", users);
    if (!users) {
        return <Loader></Loader>
    }

    let cardsRow = [];
    let counter = 0;


    for (let data in users) {
        cardsRow.push(<Profile key={users.id} {...users[data]}></Profile>);
        counter++;
    }

    console.log("before", cardsRow);
    cardsRow.sort((x, y) => {
        // console.log("sort", x.props.order, y.props.order)
        if (x.props.order && y.props.order) {
            if (x.props.order > y.props.order) {
                return 1;
            } else {
                return -1;
            }
        }
        if (x.props.order && !y.props.order) {
            return -1;
        }
        if (!x.props.order && y.props.order) {
            return 1;
        }

        return 0;
    });
    console.log("after", cardsRow);

    return <div>
        <div className="team-header">Meet The Team</div>

        <div className="profile-page">

            <div className="h-profile">
                {cardsRow}
            </div>


        </div>
        {/* <FooterPage></FooterPage> */}
        <CustomFooter></CustomFooter>
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