import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavbarComponent({ selected }) {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div className={navbar ? "navbar active" : "navbar"}>
        <Link className={selected === "HOME" && "active"} to="/">
          <img className="nav-logo" src="/logo.png" alt="STB SICAR logo" />
        </Link>
        <div className="nav-items-container">
          <Link className="nav-link" to="/">
            <p className="nav-item">Présentation</p>
          </Link>
          <Link className="nav-link" to="/nos-fonds">
            <p className="nav-item">Nos Fonds</p>
          </Link>
          <Link className="nav-link" to="/responsabilite">
            <p className="nav-item">Responsabilité Sociale</p>
          </Link>
          <Link className="nav-link" to="/realisations">
            <p className="nav-item">Nos Réalisations</p>
          </Link>
          <Link className="nav-link" to="/actualites">
            <p className="nav-item">Actualités</p>
          </Link>
          <Link className="nav-link " to="/contact">
            <button id="contact-button" className="nav-item-contact">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
