import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Slide from 'react-reveal/Fade';
import FooterPage from "../../Components/Footer/Footer2";
import "./Members.css";
import fire from "../../Scripts/Fire";
import { FaYoutube } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import SkillCard from "../../Components/SkillCard/SkillCard";
import plexus from '../../Img/plexus.jpg'


let Members = (props) => {
    let { member } = useParams();
    let [data, setData] = useState("None");
    useEffect(async () => {
        setData(await fire.getMember(member));
    }, [])

    let generateSkills = () => {
        console.log(data.skills);
        if (data.skills) {
            let skill = data.skills.split(" ");
            let cards = [];

            for (let val in skill) {
                console.log(skill[val]);
                cards.push(<SkillCard skills={skill[val]}></SkillCard>)
            }
            return cards;

        }
        return <SkillCard skills="No Skills"></SkillCard>
    }

    // console.log("member", data);
    return <div>
        <Navbar></Navbar>0
        <div>Members {member}</div>

        <Slide bottom>
            <div className="MembersPage">
                <div className="MembersHolder">
                    <div className="MembersCont">

                        <div className="MembersLeftCont">
                            <img className="MemBack" src={plexus}></img>
                            <img className="MemImg" src={data.img}></img>
                            <div className="MemberName">{data.name || "Member"}</div>
                            <div className="MemberSocial">
                                <FiLinkedin className="MemberIcon"></FiLinkedin>
                                <AiOutlineInstagram className="MemberIcon"></AiOutlineInstagram>
                                <FiGithub className="MemberIcon"></FiGithub>
                            </div>

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
        <FooterPage></FooterPage>
    </div >
}

export default Members;
