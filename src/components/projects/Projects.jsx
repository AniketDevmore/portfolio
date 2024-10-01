import React, { useEffect, useState } from "react";
import "./Projects.css";
import { useSelector } from "react-redux";

const Projects = () => {
  const [fourProj, setFourProj] = useState([]);
  const project = useSelector((state) => state.counter.project);

  // slicing first four projects
  useEffect(() => {
    let data = project.slice(0, 4);
    setFourProj(data);
  }, []);

  return (
    <div>
      {/* first four projects to display on main page */}
      <h1 className="projectHeading">Project</h1>
      <div className="cardOuterDiv">
        {fourProj.map((ele, i) => (
          <div key={i} className="cardInnerDiv">
            <div className="imgDiv">
              <img src={ele.img} alt={ele.name} />
            </div>
            <h5>{ele.name}</h5>
            <p>{ele.description}</p>
            {ele.key !== 'native' ?
              <div className="btnDiv">
                <a href={ele.hostLink} target="_blank">
                  {/* VIEW */}
                  <i class="fa-solid fa-desktop fa-lg"></i>
                </a>
                <a href={ele.githubLink} target="_blank">
                  {/* SOURCE */}
                  <i className="fa-brands fa-github fa-lg"></i>
                </a>
              </div>
              :
              <div className="btnDiv">
                <a href={ele.hostLink} target="_blank">
                  {/* VIEW */}
                  <i class="fa-solid fa-mobile-screen-button fa-lg" style={{paddingLeft: 4, paddingRight: 4}}></i>
                </a>
                <a href={ele.hostLink} target="_blank">
                  {/* VIEW */}
                  <i class="fa-solid fa-mobile fa-lg" style={{paddingLeft: 4, paddingRight: 4}}></i>
                </a>
                <a href={ele.githubLink} target="_blank">
                  {/* SOURCE */}
                  <i className="fa-brands fa-github fa-lg"></i>
                </a>
              </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
