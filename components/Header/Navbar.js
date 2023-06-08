import React from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import SncfConnect from "../../public/images/sncfConnect.png";
import { SiYourtraveldottv } from "react-icons/si";
import { ImTicket } from "react-icons/im";
import { BsBookHalf } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.myheader}`} id="navbar">
      <div className="container-fluid">
        <Image src={SncfConnect} alt="Sncf connect"></Image>

        <div className={`collapse navbar-collapse  ${styles.myNavbar}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link p-4 "
                aria-current="page"
                href="#"
                style={{
                  color: "#F3F3F4",
                }}
              >
                <SiYourtraveldottv
                  style={{ paddingRight: "5px", fontSize: "26px" }}
                />
                Voyager
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-4 "
                href="#"
                style={{ color: "#F3F3F4" }}
              >
                <ImTicket style={{ paddingRight: "5px", fontSize: "26px" }} />
                Billets
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-4 "
                href="#"
                style={{ color: "#F3F3F4" }}
              >
                <BsBookHalf style={{ paddingRight: "5px", fontSize: "26px" }} />
                Offres
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-4 "
                href="#"
                style={{ color: "#F3F3F4" }}
              >
                <MdAccountCircle
                  style={{ paddingRight: "5px", fontSize: "26px" }}
                />
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
