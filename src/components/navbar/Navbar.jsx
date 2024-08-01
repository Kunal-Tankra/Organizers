import React from 'react'
import './Navbar.css'
import siteLogo from './sitelogo2019.png'
import { NavLink } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'

const Navbar = () => {
  return (
    <div className="navbarContainer">
      {/* top bar */}
      <div className="navTop ">
        <NavLink to="/">
          <img src={siteLogo} className="navTop_siteLogo" alt="Site Logo" />
        </NavLink>

        {/* <div className="navTop_items">

          <a href="/">BFC TV</a>
          <a href="/">BFC CARES</a>
          <img src={jsw} alt="jsw logo" />
        </div> */}
      </div>

      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
            <img src={siteLogo} className="navbar_siteLogo" alt="Site Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* nav bar links */}
          <NavbarLinks />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
