import React  from "react";

function Hero(props){
    return (
        <section id="hero">
          <div className="introduction">
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
            <img id="hero-img" src={props.heroImg} alt="person" />
          </div>
        </section>
    );
}

export default Hero;