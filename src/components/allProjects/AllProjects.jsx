import React from "react";
import "./AllProjects.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import projImg from "../../../public/images/projImg.jpg";

const AllProjects = () => {
  const project = useSelector((state) => state.counter.project);

  return (
    <div>
      <Navbar />
      {/* html for projects page */}
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
        {/* display all projects */}
        {project.map((ele, i) => (
          <div key={i} className="cardInnerDiv">
            <div className="imgDiv">
              <img src={ele.img} alt={ele.name} />
            </div>
            <h5>{ele.name}</h5>
            <p>{ele.description}</p>
            {ele.key !== 'native' ?
              <div className="btnDiv">
                {ele.hostLink !== '' && <a href={ele.hostLink} target="_blank">
                  {/* VIEW */}
                  <i class="fa-solid fa-desktop fa-lg"></i>
                </a>}
                {ele.githubLink !== '' && <a href={ele.githubLink} target="_blank">
                  {/* SOURCE */}
                  <i className="fa-brands fa-github fa-lg"></i>
                </a>}
              </div>
              :
              <div className="btnDiv">
                {ele.android !== '' && <a href={ele.android} target="_blank">
                  {/* VIEW */}
                  <i class="fa-brands fa-android" style={{ paddingLeft: 2, paddingRight: 2 }}></i>
                  {/* <i class="fa-solid fa-mobile fa-lg" style={{paddingLeft: 4, paddingRight: 4}}></i> */}
                </a>}
                {ele.ios !== '' && <a href={ele.ios} target="_blank">
                  <i class="fa-brands fa-apple" style={{ paddingLeft: 5, paddingRight: 5 }}></i>
                </a>}
                {ele.githubLink !== '' && <a href={ele.githubLink} target="_blank">
                  {/* SOURCE */}
                  <i className="fa-brands fa-github fa-lg"></i>
                </a>}
              </div>}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;
