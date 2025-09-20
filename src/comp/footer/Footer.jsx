import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div class="footer_parent parent">
        <div class="footer_cont cont">
          <div class="top_section">
            <div class="logo_section">
              <div class="logo"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                sapiente exercitationem nulla,
              </p>
            </div>
            <div class="pages">
              <h3>Quick Links</h3>
              <div class="links">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Services</Link>
                <Link to="/">Shankanad</Link>
                <Link to="/">Gallery</Link>
                <Link to="/">Contact</Link>
              </div>
            </div>
            <div class="other_pages">
              
            </div>
            <div class="contact"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
