import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";

const NavBar = ({ onSelectNavItem }) => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setFixed(true) : setFixed(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const navItems = ["Programs", "About us", "Campus", "Testimonials"];

  return (
    <nav className={`nav container ${fixed ? "dark-nav" : ""} `}>
      <img src={logo} className="logo" />

      <ul className={mobileMenu ? "" : "hide-menu"}>
        {navItems.map((item) => (
          <a
            key={item}
            className="nav__item"
            onClick={() => onSelectNavItem(item)}
          >
            {item}
          </a>
        ))}
        <a className="btn" onClick={() => onSelectNavItem("Contact us")}>
          Contact us
        </a>
      </ul>

      <img className="menu-icon" src={menu_icon} alt="" onClick={toggleMenu} />
    </nav>
  );
};

export default NavBar;
