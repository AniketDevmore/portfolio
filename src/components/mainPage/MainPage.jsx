import React from "react";
import "./MainPage.css";
import backgroundImg from "../../../public/images/main-background.jpg";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      {/* html for main page */}
      <div className="mainOuterDiv">
        <div className="mainImgDiv">
          <img src={backgroundImg} alt="img." />
        </div>
        <div className="mainTextDiv">
          <h5>HI, I'M FRONTEND DEVELOPER</h5>
          <h1>React and React Native Developer</h1>
          <div>
            <Link to={`/all-projects`}>PROJECTS</Link>
            <Link to={`/contact`}>CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
