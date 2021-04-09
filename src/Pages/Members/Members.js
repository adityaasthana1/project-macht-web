import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Slide from 'react-reveal/Fade';
import FooterPage from "../../Components/Footer/Footer2";
import "./Members.css";
import fire from "../../Scripts/Fire";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


let Members = (props) => {
    let { member } = useParams();
    let [data, setData] = useState("None");
    useEffect(async () => {
        setData(await fire.getMember(member));
    }, [])

    console.log("member", data);
    return <div>
        <Navbar></Navbar>0
        <div>Members {member}</div>

        <Slide bottom>
            <div className="MembersPage">
                <div className="MembersCont">
                    <div className="Prod-loc"> Member / {data.name} </div>

                    <div className="MemberLine"></div>

                    <div className="MemberMain">
                        <div className="MemberLeft">

                            <div className="MemberImg">
                                <img className="MemImg" src={data.img}></img>
                            </div>
                            <div className="MemberInfo">
                                <div className="MemberName">{data.name || "Member"}</div>
                                <div className="MemberSocial">

                                </div>
                                {/* <div className="MemberBaseInfo"> {data.info || "No info"} </div> */}
                            </div>

                        </div>

                        <div className="MemberLine"></div>

                        {/* <div className="MemberInfo">
                            <div className="MemberKnows">{data.role || "Developer"}</div>

                            <div className="MemberLine"></div>


                        </div> */}


                    </div>

                    <div className="MemberExtra"></div>


                </div>
            </ div>
        </Slide>
        <FooterPage></FooterPage>
    </div >
}

export default Members;
