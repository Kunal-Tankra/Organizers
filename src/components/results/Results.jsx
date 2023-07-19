import React, { useEffect } from 'react'
import logo from "./schedule-inactive.png"
import "./Results.css"
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Results = () => {
    const navigate = useNavigate()



    useEffect(() => {

        navigate("/results/cricket", {replace: true})
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="topBox"></div>

            <div className='resultsContainer'>
                {/* navbar */}
                <div className="resultsNavbar">
                    <div className="resultsNav_heading">

                        <div className="logoBG">
                            <img src={logo} alt="schedule logo" />
                        </div>

                        <h2>Schedule</h2>
                    </div>


                    <div className="resultsNavlinks_Container">
                        <NavLink to="cricket" >Cricket</NavLink>
                        <NavLink to="football"> Football</NavLink>
                        <NavLink to="volleyball">Volleyball</NavLink>

                        {/* more dropdown */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <span className="dropdown-item" href="#">
                                    <NavLink to="cricket">
                                        cricket
                                    </NavLink>
                                </span>
                                <span className="dropdown-item" href="#">
                                    <NavLink to="football">
                                        foot
                                    </NavLink>
                                </span>
                                <span className="dropdown-item" href="#">
                                    <NavLink to="volleyball">
                                        voball
                                    </NavLink>
                                </span>
                            </div>
                        </li> */}
                    </div>
                </div>

                <Outlet />


            </div>
        </>
    )
}

export default Results
