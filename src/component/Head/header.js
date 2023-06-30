import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import logo from "../pic/logo.png";
import "./header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#features">features</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#clients">clients</a>
              </li>
              <li>
                <a href="#blog">blog</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="home-btn">BUY NOW</button>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <Icon name="close" className="close home-btn" />
              ) : (
                <Icon name="bars" className="open" />
              )}
            </button>
          </div>
        </div>
      </header>
      <section>
        
      </section>
    </>
  );
};

export default Header;
