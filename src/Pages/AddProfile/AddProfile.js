import React, { useState } from "react";
import "./addprofile.css";
import fire from "../../Scripts/Fire";
import Profile from "../../Components/Profile/Profile";
import calcId from "../../Scripts/calcId";
import "./addprofile.css";

let AddProfile = () => {

    let [name, setName] = useState("");
    let [desc, setDesc] = useState("");
    let [image, setImage] = useState("#");
    let [role, setRole] = useState("");
    let [info, setInfo] = useState("");

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
                info: info
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
                    <label>Select image</label>
                    <input type="file" onChange={descImage}></input>
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