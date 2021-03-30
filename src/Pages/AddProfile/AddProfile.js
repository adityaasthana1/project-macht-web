import React, { useState } from "react";
import "./addprofile.css";
import fire from "../../Scripts/Fire";
import Profile from "../../Components/Profile/Profile";
import calcId from "../../Scripts/calcId";

let AddProfile = () => {

    let [name, setName] = useState("");
    let [desc, setDesc] = useState("");
    let [image, setImage] = useState("#");

    let nameSetter = (e) => {
        setName(e.target.value);
    }

    let descSetter = (e) => {
        setDesc(e.target.value);
    }

    let descImage = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }

    let submitData = () => {
        fire.getUser().then(async (e) => {
            console.log("submit data", e);
            e[name] = {
                name: name,
                desc: desc,
                img: await fire.uploadImage(image, name),
                id: calcId(name)
            };

            fire.upload(e);
        });
    }

    return <div className="add-profile">
        <form>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={nameSetter} value={name}></input>
                </div>
                <div>
                    <label>Description</label>
                    <textarea type="text" onChange={descSetter} value={desc}></textarea>
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
    </div>

}

export default AddProfile;