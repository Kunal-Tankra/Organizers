import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'
import "./StickyNavbar.css"
import siteLogo from "./sitelogo2019.png"

const StickyNavbar = (props) => {
    
    
    return (
        <div className="stickyNavbarContainer" style={{top: props.showAfterScroll && '0rem'}}>

            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid ">
                    <NavLink className="navbar-brand" to="/"><img src={siteLogo} className='stickyNavbar_siteLogo' alt="Site Logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* nav bar links */}
                    <NavbarLinks />


                </div>
            </nav>
        </div>
    )
}

export default StickyNavbar
