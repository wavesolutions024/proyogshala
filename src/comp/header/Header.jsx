import React, { useState } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const navs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Shankanad",
      link: "/shankanad",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <div class="header_parent parent">
        <div class="header_cont cont">
          <div class="logo">
            <div class="logo_imag"></div>
          </div>
          <div class="navsection">
            {navs.map((item, index) => (
              <Link
                className={location.pathname === item.link ? "active" : ""}
                key={index}
                to={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div class="contact_section">
            <a href="" class="btn">
                <div class="call_icon">
              <IoMdCall />
            </div>
            <span href="">+91 1234567890</span>
            </a>
            <div class="hamburger">
              <div class="open" onClick={() => setActive(true)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
         
            <div class={active ? "mob_nav active" : "mob_nav"}>
              <div class="top">
                <div class="logo"></div>
                <div class="cross" onClick={() => setActive(false)}>
                  <RxCross2 />
                </div>
              </div>
              <div class="bottom">
                {navs.map((item, index) => (
                  <Link
                    onClick={() => setActive(false)}
                    className={location.pathname === item.link ? "active" : ""}
                    key={index}
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
        
        </div>
      </div>
    </>
  );
};

export default Header;
