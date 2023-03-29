import React from "react";

function About(props) {
  return (
    <section id="about">
      <div class="myself">
        <img class="profile-img" src={props.aboutImg} alt="profile" />
        <h2>{props.aboutHeading}</h2>
        <p>{props.aboutMe}</p>
      </div>
    </section>
  );
}

export default About;
