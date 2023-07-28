import React from "react";
import "./AllProjects.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import projImg from "../../images/projImg.jpg";

const AllProjects = () => {
  const project = useSelector((state) => state.counter.project);

  return (
    <div>
      <Navbar />
      <div className="mainAboutDiv">
        <div className="aboutImgDiv">
          <img src={projImg} alt="developer" />
        </div>
        <div
          id="allproj"
          className="aboutTextDiv"
          style={{ textAlign: "center", marginLeft: "15vw" }}
        >
          <h5 id="projH5">All Projects</h5>
          <p id="projPara">Some of my most recent work</p>
        </div>
      </div>

      <div className="cardOuterDiv">
        {project.map((ele, i) => (
          <div key={i} className="cardInnerDiv">
            <div className="imgDiv">
              <img src={ele.img} alt={ele.name} />
            </div>
            <h5>{ele.name}</h5>
            <p>{ele.description}</p>
            <div className="btnDiv">
              <a href={ele.hostLink} target="_blank">
                VIEW
              </a>
              <a href={ele.githubLink} target="_blank">
                SOURCE
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;
