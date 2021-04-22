import React, { useState } from "react";
import "./addprofile.css";
import fire from "../../Scripts/Fire";
import Profile from "../../Components/Profile/Profile";
import calcId from "../../Scripts/calcId";
import "./addprofile.css";
import { Slide } from "@material-ui/core";

let AddProfile = () => {

    let [name, setName] = useState("");
    let [desc, setDesc] = useState("");
    let [image, setImage] = useState("#");
    let [role, setRole] = useState("");
    let [info, setInfo] = useState("");
    let [skills, setSkills] = useState("");
    let [linked, setLinked] = useState("");
    let [insta, setInsta] = useState("");
    let [Git, setGit] = useState("");

    let nameSetter = (e) => {
        setName(e.target.value);
    }

    let descSetter = (e) => {
        setDesc(e.target.value);
    }

    let descImage = (e) => {
        setImage(e.target.files[0]);
    }

    let descRole = (e) => {
        setRole(e.target.value);
    }

    let descInfo = (e) => {
        setInfo(e.target.value);
    }

    let descSkills = (e) => {
        setSkills(e.target.value);
    }

    let linkedSetter = (e) => {

        setLinked(e.target.value);
    }

    let instaSetter = (e) => {
        setInsta(e.target.value);
    }

    let gitSetter = (e) => {
        setGit(e.target.value);
    }



    let submitData = () => {
        fire.getUser().then(async (e) => {
            console.log("submit data", e);
            let img = await fire.uploadImage(image, name);

            e[name] = {
                name: name,
                desc: desc,
                img: img,
                id: name.toLowerCase()
            };

            let Member = {
                name: name,
                desc: desc,
                img: img,
                id: (name.toLowerCase()),
                role: role,
                info: info,
                skills: skills,
                git: Git,
                insta: insta,
                linked: linked
            }

            await fire.upload(e);
            await fire.uploadMember(Member);
        });
    }

    return <div className="add-profile">
        <form>
            <div className="addForm">
                <div>
                    <label>Name</label>
                    <input type="text" onChange={nameSetter} value={name}></input>
                </div>

                <div>
                    <label>Description</label>
                    <textarea type="text" onChange={descSetter} value={desc}></textarea>
                </div>

                <div>
                    <label>Role</label>
                    <input type="text" onChange={descRole} value={role}></input>
                </div>

                <div>
                    <label>MemberDesc</label>
                    <textarea type="text" onChange={descInfo} value={info}></textarea>
                </div>

                <div>
                    <label>Skills</label>
                    <textarea type="text" onChange={descSkills} value={skills}></textarea>
                </div>



                <div>
                    <label>Select image</label>
                    <input type="file" onChange={descImage}></input>
                </div>

                <div>
                    <label>Social</label>
                    <br />
                    <label>Linked In</label>
                    <input type="text" onChange={linkedSetter} value={linked}></input>

                    <br />

                    <label>Insta</label>
                    <input type="text" onChange={instaSetter} value={insta}></input>

                    <br />

                    <label>Github</label>
                    <input type="text" onChange={gitSetter} value={Git}></input>
                </div>

                <div>
                    <input type="button" value="Upload" onClick={submitData}></input>
                </div>
            </div>
        </form>

        <Profile name={name} desc={desc} img={image}></Profile>
    </div >

}

export default AddProfile;