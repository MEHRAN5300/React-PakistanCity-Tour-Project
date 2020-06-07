import React from "react";
import Logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="Navebar">
      <img src={Logo} alt="City Tours" />
      <ul className="nav-Links">
        <li>
          <a href="/" className="nav-Link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-Link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-Link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
