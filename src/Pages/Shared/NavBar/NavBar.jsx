import React, { useEffect, useState } from "react";
import logoBlack from "../../../assets/images/logo-black.png";
import logoWhite from "../../../assets/images/logo-white.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="header" className="tra-menu navbar-light white-scroll">
      <div
        className="header-wrapper"
        style={
          isScrolled ? { backgroundColor: "black", transition: ".2s" } : {}
        }
      >
        {/* -- MOBILE HEADER -- */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <a href="#hero-1">
              <img src={logoBlack} alt="mobile-logo" />
            </a>
          </span>
          <a
            id="wsnavtoggle"
            className="wsanimated-arrow"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span></span>
          </a>
        </div>
        <div
          className="offcanvas offcanvas-end canvas-bg"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="">
            <ul className="mobile-nav">
              <li
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                className="py-3"
              >
                <Link to="/" className="mobile-nav-text">
                  Home
                </Link>
              </li>
              <li
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                className="py-3"
              >
                <Link to="/about" className="mobile-nav-text">
                  About
                </Link>
              </li>
              <li
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                className="py-3"
              >
                <Link className="mobile-nav-text" to="service">
                  Services
                </Link>
              </li>
              <li
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                className="py-3"
              >
                <Link className="mobile-nav-text" to="gallery">
                  Gallery
                </Link>
              </li>
              <li
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                className="py-3"
              >
                <Link className="mobile-nav-text" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* -- MOBILE End -- */}

        {/* -- Large NAVIGATION -- */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* -- HEADER WHITE LOGO -- */}
            <div className="desktoplogo">
              <a href="#hero-1" className="logo-white">
                <img src={logoWhite} alt="logo" />
              </a>
            </div>

            {/* -- MAIN MENU -- */}
            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list">
                <li>
                  <Link className="text-white navlink-custom">Home</Link>
                </li>

                <li className="nl-simple" aria-haspopup="true">
                  <Link to="about" className="h-link">
                    About
                  </Link>
                </li>

                <li aria-haspopup="true">
                  <Link to="service" className="text-white navlink-custom">
                    Service
                  </Link>
                </li>

                <li className="nl-simple" aria-haspopup="true">
                  <Link to="gallery" className="text-white navlink-custom">
                    Gallery
                  </Link>
                </li>

                <li className="nl-simple" aria-haspopup="true">
                  <Link to="contact" className="text-white navlink-custom">
                    Contact
                  </Link>
                </li>
                {/* -- SIGN UP BUTTON -- */}
                <li className="nl-simple" aria-haspopup="true">
                  <a
                    href="booking.html"
                    className="btn btn--tra-white hover--white last-link"
                  >
                    Become a Member
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
