import React from "react";

function Skill(props) {
  return (
    <section id="skills">
      <h3>{skillHeading}</h3>
      <div className="skill-content">
        <img src={props.skillImg} alt="person" />
        <div className="skill-text">
          <ul>
            <li>
              <i className="fa-solid fa-terminal"></i> {props.skill1}
            </li>
            <li>
              <i className="fa-solid fa-terminal"></i> {props.skill2}
            </li>
            <li>
              <i className="fa-solid fa-terminal"></i> {props.skill3}
            </li>
            <li>
              <i className="fa-solid fa-terminal"></i> {props.skill4}
            </li>
            <li>
              <i className="fa-solid fa-terminal"></i> {props.skill5}
            </li>
            <li>
              <i className="fa-solid fa-terminal"></i> {props.skill6}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skill;
