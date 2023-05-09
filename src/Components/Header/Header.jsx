import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
// the react scroll library allows us to use the Link object to link to diffrent section and jump to them with thier id
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const handleClick = () => setMenuOpened(false);
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="/" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="/"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              onClick={handleClick}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" spy={true} smooth={true} onClick={handleClick}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="reasons" spy={true} smooth={true} onClick={handleClick}>
              Why us
            </Link>
          </li>
          <li>
            <Link to="plans" spy={true} smooth={true} onClick={handleClick}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              onClick={handleClick}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
