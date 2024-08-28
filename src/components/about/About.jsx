import React from "react";
import "./About.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import aboutImg from "../../../public/images/aboutImg2.jpg";
import html from "../../../public/images/html.png";
import css from "../../../public/images/css.png";
import js from "../../../public/images/js.png";
import bootstrap from "../../../public/images/bootstrap.png";
import material from "../../../public/images/material.png";
import ant from "../../../public/images/ant-design.png";
import react from "../../../public/images/react.png";
import node from "../../../public/images/node.png";
import mongodb from "../../../public/images/mongoDB.png";
import git from "../../../public/images/git.png";
import reactNative from "../../../public/images/reactNative.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />
      {/* html for about page */}
      <div className="mainAboutDiv">
        <div className="aboutImgDiv">
          <img src={aboutImg} alt="developer" />
        </div>
        <div className="aboutTextDiv">
          <h5> I AM</h5>
          <h1>Aniket </h1>
          <h2>Devmore</h2>
          <hr />
          <p>FULL STACK WEB DEVELOPER</p>
          <Link to={`/contact`}>CONTACT</Link>
        </div>
        <div className="aboutContentDiv">
          <h1>ABOUT</h1>
          <p>Hi, I am a Full Stack Web Developer and Web Designer.</p>
          <p>
            I love working on new and exciting technologies emerging nowadays. I
            have a keen interest in Web Development and I am always looking for
            new opportunities to learn and grow.
          </p>
        </div>
        <div className="aboutSkillsDiv">
          <h1>What My Programming Skills Included?</h1>
          <div className="skillsInternalDiv">
            <span>
              <img src={html} alt="html" />
              <span>HTML</span>
            </span>
            <span>
              <img src={css} alt="css" />
              <span>CSS</span>
            </span>
            <span>
              <img src={js} alt="js" />
              <span>JS</span>
            </span>
            <span>
              <img src={bootstrap} alt="bootstrap" />
              <span>BOOTSTRAP</span>
            </span>
            <span>
              <img src={material} alt="material-UI" />
              <span>MATERIAL_UI</span>
            </span>
            <span>
              <img src={ant} alt="ant-design" />
              <span>ANT_DESIGN</span>
            </span>
            <span>
              <img src={react} alt="react" />
              <span>REACT_JS</span>
            </span>
            <span>
              <img src={reactNative} alt="react-native" />
              <span>React_Native</span>
            </span>
            <span>
              <img src={node} alt="nodeJS" />
              <span>NODE_JS</span>
            </span>
            <span>
              <img src={mongodb} alt="mongoDB" />
              <span>MONGO_DB</span>
            </span>
            <span>
              <img src={git} alt="git" />
              <span>GIT</span>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
