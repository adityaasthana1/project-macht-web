import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Slide from 'react-reveal/Fade';
import FooterPage from "../../Components/Footer/Footer2";
import "./Members.css";
import fire from "../../Scripts/Fire";
import { FaYoutube } from "react-icons/fa";
import { FiLinkedin, FiArrowLeft } from "react-icons/fi";

import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import SkillCard from "../../Components/SkillCard/SkillCard";
import plexus from '../../Img/plexus.jpg'
import { Link } from "react-router-dom";
import CustomFooter from "../../Components/Footer/CustomFooter";





let Members = (props) => {
    let { member } = useParams();
    let [data, setData] = useState("None");
    useEffect(async () => {
        setData(await fire.getMember(member));
    }, [])

    let history = useHistory();

    let goBack = () => {
        history.goBack();
    }

    let generateSkills = () => {
        // console.log(data.skills);
        if (data.skills) {
            let skill = data.skills.split(" ");
            let cards = [];

            for (let val in skill) {
                // console.log(skill[val]);
                cards.push(<SkillCard skills={skill[val]} key={val}></SkillCard>)
            }
            return cards;

        }
        return <SkillCard skills="No Skills"></SkillCard>
    }

    let getSocial = (social, comp) => {
        if (social) {
            return <a href={social}>{comp}</a>
        }
    }

    let genSocial = () => {
        // console.log(data.git)
        return <div className="MemberSocial">
            {
                getSocial(data.git, <FiLinkedin className="MemberIcon"></FiLinkedin>)
            }
            {
                getSocial(data.insta, <AiOutlineInstagram className="MemberIcon"></AiOutlineInstagram>)
            }
            {
                getSocial(data.linked, <FiGithub className="MemberIcon"></FiGithub>)
            }

        </div>
    }

    console.log("member", data);

    return <div>
        <Navbar></Navbar>
        <div>Members {member}</div>

        <Slide bottom>
            <div className="MembersPage">
                <div className="MembersHolder">
                    <div className="MembersCont">

                        <div className="MembersLeftCont">
                            <img className="MemBack" src={plexus}></img>
                            <div className="MemGoBack">
                                <FiArrowLeft onClick={goBack}></FiArrowLeft>
                            </div>
                            <img className="MemImg" src={data.img}></img>
                            <div className="MemberName">{data.name || "Member"}</div>
                            {genSocial()}

                        </div>
                        <div className="MemberInfo">

                            <div className="MemberSkills">
                                <h3 className="MembersRaise">Role</h3>
                                <h5 className="MembersRole MembersRaise SkillCard">{data.role}</h5>
                                <h3>Skills</h3>
                                <div className="MemberSkillsCards">
                                    {generateSkills()}
                                </div>
                            </div>

                            <div className="MemberInfo">
                                <p>{data.info}</p>
                            </div>
                            {/* <div className="MemberBaseInfo"> {data.info || "No info"} </div> */}
                        </div>

                    </div>
                </div>
            </ div>
        </Slide>
        {/* <FooterPage></FooterPage> */}
        <CustomFooter></CustomFooter>
    </div >
}

export default Members;
