import React from "react";
import SkillsEXP from "./SkillsEXP";
import "./experiences.css";

function CardExp(props) {
  return (
    <div className="cardexp">
      <a target="blank" href={props.expList[4]}>
        <img src={props.expList[2]} alt="" />
        <div className="detail">
          <h2>{props.expList[0]}</h2>
          <p>{props.expList[1]}</p>
          <ul>
            <SkillsEXP skills={props.expList[3]} />
          </ul>
        </div>
      </a>
    </div>
  );
}

export default CardExp;
