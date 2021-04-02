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
        setData(await fire.getMember(member));
    }, [])

    return <div>
        <Navbar></Navbar>0
        <div>Members {member}</div>

        <Slide bottom>
            <div className="MembersPage">
                <div className="MembersCont">
                    <div className="Prod-loc"> Member / {data.name} </div>

                    <div className="MemberLine"></div>

                    <div className="MemberInfo">
                        <div className="MemberLeft">
                            <div className="MemberImg">
                                <img className="MemImg" src="https://firebasestorage.googleapis.com/v0/b/ledautomation-1f46e.appspot.com/o/images%2F%20Carl%20Johnson%20?alt=media&token=4cdc77a8-9fd0-414d-aebf-456bd5aa38a7"></img>
                            </div>
                            <div className="MemberName">Member</div>
                            <div className="MemberSocial"></div>
                        </div>

                        <div className="MemberLine"></div>

                        <div className="MemberInfo">
                            <div className="MemberKnows">WebDevedloper</div>

                            <div className="MemberLine"></div>

                            <div className="MemberBaseInfo"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet iaculis velit. Nullam blandit vitae mi in tincidunt. Nam sit amet elit leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed neque massa. Suspendisse urna arcu, dapibus at lorem non, cursus posuere justo. In hendrerit mi leo, id rhoncus nulla scelerisque vitae. Ut ac volutpat magna, vel fringilla nibh.

Aenean eleifend sodales purus a sagittis. Fusce congue feugiat augue ut facilisis. Duis nec metus lectus. Nullam luctus posuere ipsum a convallis. Maecenas ac ligula id nunc commodo tempus id sed arcu. Pellentesque efficitur augue ac molestie placerat. Nullam pretium dictum enim. Sed cursus metus vitae fringilla porta. Donec est augue, faucibus in ornare et, hendrerit vel turpis. Vivamus dapibus urna erat, quis tincidunt eros fringilla vitae. Vivamus efficitur tempus magna eu porta. Cras ac porta arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ac nunc ultricies, gravida risus sed, volutpat diam. Quisque id iaculis turpis. </div>
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
