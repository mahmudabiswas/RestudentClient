import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";
import img from "../../../../public/img/logo.svg";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo pb-2 ">
            <span className="">
              <img
                src={img}
                alt="banner logo"
                className="hover:rotate-180 duration-1000"
              />
            </span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">{/* <CodeIcon /> */}</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/foodSection"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                FoodSection
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/footer"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Footer
              </NavLink>
            </li>
            <li>
              <NavLink>
                <div className="dropdown">
                  <div tabIndex={0} role="button">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <IoMenu />{" "}
              </span>
            ) : (
              <span className="icon">
                <MdRestaurantMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
