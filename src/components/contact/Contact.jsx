import React, { useEffect, useState } from "react";
import "./Contact.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import contactme from "../../images/contactme.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const sendHandler = () => {
    // console.log(formData);

    if (
      formData.name.length >= 1 &&
      formData.email.length >= 1 &&
      formData.subject.length >= 10 &&
      formData.message.length >= 20
    ) {
      window.location.href = `mailto:aniketdevmore1008@gmail.com?subject=${
        formData.subject
      }&body=${`name=${formData.name},%20email=${formData.email},%20message=${formData.message}`}`;
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      if (formData.name.length < 1) {
        alert("Please enter your name!");
      } else if (formData.email.length < 1) {
        alert("Please enter your email!");
      } else if (formData.subject.length < 10) {
        alert(
          "Please enter your subject!\nThe subject should contain atleast 10 letters!"
        );
      } else if (formData.message.length < 20) {
        alert(
          "Please enter your message!\nThe message should contain atleast 20 letters!"
        );
      }
    }
  };

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
            onChange={handleChange}
            value={formData.name}
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
            onChange={handleChange}
            value={formData.email}
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
            onChange={handleChange}
            value={formData.subject}
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
            onChange={handleChange}
            value={formData.message}
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <div className="formInnerDiv">
          <button
            onClick={sendHandler}
            mailto="mailto:aniketdevmore1008@gmail.com"
          >
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
