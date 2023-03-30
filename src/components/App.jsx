import React from "react";
import Header from "./Header";
import logoImg from "../imgs/logo.png";
import heroImg from "../imgs/hero.jpg";
import profileImg from "../imgs/profile.png";
import skillImg from "../imgs/skills.jpg";
import social from "../js/social.js";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import myProjects from "../js/projects";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header
        logo={logoImg}
        instagram={social.instagram}
        twitter={social.twitter}
        github={social.github}
      />
      <Hero
        heading="Hi, I'm Tabin Imtiyaz"
        subheading="a front-end web developer!"
        heroImg={heroImg}
      />
      <About
        aboutImg={profileImg}
        aboutHeading="Hi, I'm Tabin. Nice to meet you!"
        aboutMe="I am a programming enthusiast who loves pastries, cats, and nature.
          I'm a beginner and have no previous work experience, but I'm eager to
          learn and work with others. I'm proficient in HTML, CSS, JavaScript,
          Node.js, React, and MongoDB, and have even created this website design
          using my programming knowledge and the basic understanding of Figma.
          Let's collaborate and create something amazing together!"
      />
      <Skill
        skillHeading="My Skills"
        skillImg={skillImg}
        skill1="I'm well-versed in HTML, CSS,
              and JavaScript - the building blocks of the web."
        skill2="I have experience with
              Node.js and MongoDB - tools for creating dynamic web applications."
        skill3="I enjoy working with
              front-end framework such as React - it makes creating interactive
              interfaces a breeze!"
        skill4="I'm skilled in using design
              software like Figma to bring your vision to life."
        skill5="I understand the importance
              of responsive web design - your website will look great on any
              device!"
        skill6="I have a positive attitude
              and love to learn, always eager to take on new challenges."
      />
      <Project projectArray={myProjects} />
      <Footer
        logo={logoImg}
        footerHeading="Attributions"
        footerContactHeading="Contact Me"
        email="tabinimtiyazwork85@gmail.com"
        heroImgLink="https://www.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_10798281.htm#query=programming&position=1&from_view=search&track=sph"
        heroImgText="Image by upklyak on Freepik"
        skillImgLink="https://www.freepik.com/free-vector/future-work-concept-illustration_26459420.htm#query=coding%20profile&position=7&from_view=search&track=ais"
        skillImgText="Image by ucoyxmasayun on Freepik"
        profileImgLink="https://www.flaticon.com/free-icons/hacker"
        profileImgText="Hacker icons created by Freepik - Flaticon"
      />
    </>
  );
}

export default App;
