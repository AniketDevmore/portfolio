import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* html for footer section */}
      <div className="footer-container">
        <div className="footerInner">
          <div>
            <h5>
              <i className="fa-solid fa-house"></i>
              <span>
                3/1033, Takawada wes, Devmore Mala, Ichalkaranji-416115,
                Kolhapur, MH.
              </span>
            </h5>
            <h5>
              <i className="fa-solid fa-mobile"></i> <span>+91-8087352038</span>
            </h5>
            <h5>
              <i className="fa-solid fa-message"></i>
              <span>aniketdevmore1008@gmail.com</span>
            </h5>
          </div>
          <hr className="hrLine" />
          <div className="footContainerSec">
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/aniket-devmore-40a094192"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin fa-lg"></i> LinkedIn
            </a>
            <a
              className="footer-link"
              href="https://github.com/AniketDevmore"
              target="_blank"
            >
              <i className="fa-brands fa-github fa-lg"></i> GitHub
            </a>
            <a
              className="footer-link"
              href="https://twitter.com/DevmoreS?t=kDr_RMmM2dTxQPd9UChfBg&s=03"
              target="_blank"
            >
              <i className="fa-brands fa-twitter fa-lg"></i> Twitter
            </a>
          </div>
        </div>
        <div className="copyright">Copyright © 2023 aniketdevmore ®</div>
      </div>
    </div>
  );
};

export default Footer;
