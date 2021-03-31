import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Slide from 'react-reveal/Fade';
import FooterPage from "../../Components/Footer/Footer2";
import "./Members.css";
import fire from "../../Scripts/Fire";


let Members = (props) => {
    let { member } = useParams();
    let [data, setData] = useState("None");
    useEffect(async () => {
        setData(await fire.getMember("Members"));
    }, [])

    return <div>
        <Navbar></Navbar>0
        <div>Members {member}</div>

        <Slide bottom>
            <div className="MembersPage">
                <div className="MembersCont">
                    <div className="Prod-loc"> Member / {member.toUpperCase()} </div>

                    <div className="MemberLine"></div>

                    <div className="MemberInfo">
                        <div className="MemberLeft">
                            <div className="MemberImg"></div>
                            <div className="MemberSocial"></div>
                        </div>
                        <div className="MemberInfo">
                            <div className="MemberHeader">{data.Temp}</div>
                            <div className="MemberBaseInfo"></div>
                        </div>
                    </div>

                    <div className="MemberExtra"></div>


                </div>
            </ div>
        </Slide>
        <FooterPage></FooterPage>
    </div >
}

export default Members;
