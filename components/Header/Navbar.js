import React from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import SncfConnect from "../../public/images/SncfConnect.png";
import { SiYourtraveldottv } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.myheader}`} id="navbar">
      <div className="container-fluid">
        <Image src={SncfConnect} alt="Sncf connect"></Image>
        {/* <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>  */}
        <div className={`collapse navbar-collapse ${styles.myNavbar}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                href="#"
                style={{ color: "#F3F3F4" }}
              >
                <SiYourtraveldottv
                  style={{ paddingRight: "4px", fontSize: "larger" }}
                />
                Voyager
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#F3F3F4" }}>
                Billets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#F3F3F4" }}>
                Offres
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#F3F3F4" }}>
                Compte
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
