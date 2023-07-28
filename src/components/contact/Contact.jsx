import React from "react";
import "./Contact.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import contactme from "../../images/contactme.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="mainAboutDiv">
        <div className="aboutImgDiv">
          <img src={contactme} alt="developer" />
        </div>
        <div
          className="aboutTextDiv"
          style={{ textAlign: "center", marginLeft: "15vw" }}
        >
          <h5 id="projH5">Contact</h5>
          <p id="projPara">Let's Connect</p>
        </div>
      </div>
      <div className="contactForm">
        <div className="formInnerDiv">
          <label htmlFor="name">Name : </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="formInnerDiv">
          <label htmlFor="email">Email : </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="formInnerDiv">
          <label htmlFor="subject">Subject : </label>
          <br />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter Your Subject"
          />
        </div>
        <div className="formInnerDiv">
          <label htmlFor="name">Message : </label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <div className="formInnerDiv">
          <button>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
