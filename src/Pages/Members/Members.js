import React from "react";
import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Slide from 'react-reveal/Fade';
import FooterPage from "../../Components/Footer/Footer2";
import "./Members.css";


let Members = (props) => {
    let { member } = useParams();
    console.log(member);
    console.log("ran");
    return <div>
        <Navbar></Navbar>
        <div>Members {member}</div>

        <Slide bottom>
            <div className="MembersPage">
                <div className="MembersCont">
                    <div className="Prod-loc"> {member} </div>

                    <div className="Prodline"></div>

                    <div className="ProdInfo">
                        <div className="ProdHolder">

                        </div>
                        <div>
                            <div className="ProdHead"></div>
                            <div className="ProdMain"></div>
                            <div class='button -dark center'>BUY</div>

                        </div>



                    </div>
                    <div className="ProdDesc">

                    </div>



                </div>
            </ div>
        </Slide>
        <FooterPage></FooterPage>
    </div>
}

export default Members;
