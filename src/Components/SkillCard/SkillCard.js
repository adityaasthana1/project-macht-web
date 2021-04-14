import React from "react";
import './SkillCard.css';

let SkillCard = (props) => {
    return <div className="SkillCard">
        {props.skills}
    </div>
}

export default SkillCard;