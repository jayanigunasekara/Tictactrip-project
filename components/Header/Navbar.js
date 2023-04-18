import React from 'react'
import Image from "next/image"
import styles from "../../styles/Header.module.css"
import SncfConnect from "../../public/images/SncfConnect.png"

const Navbar = () => {
  return (
 
      <nav className="navbar navbar-expand-lg bg-dark text-white" id="navbar">
        <div className="container-fluid">

        <Image
            src = {SncfConnect}
            alt = "Sncf connect">

        </Image>
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
        <div className={`collapse navbar-collapse ${styles.myNavbar}`} >
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Voyager</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Billets</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Offres</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Compte</a>
                </li>
                
            </ul>
        </div>
  </div>
</nav>
    
  )
}

export default Navbar

