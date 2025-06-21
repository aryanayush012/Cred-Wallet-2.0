import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 item social">
              <a href="https://www.facebook.com/ayush.aryan.90834/">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/ayush-aryan-8305861a2/">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/aryanayush012">
                <i className="bi bi-github"></i>
              </a>
              <p className="copyright text-light">
                All Rights Reserved ©️ Ayush Aryan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;