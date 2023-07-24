import React, { useState } from 'react'
import "./ResultDetails.css"
import { NavLink, Outlet } from 'react-router-dom'

const ResultDetails = () => {
    const [underLine_left, setUnderLine_left] = useState("0");

    // handle under line left position
    const handleNavUnderLine = (e) => {
        setUnderLine_left(e.target.offsetLeft + "px")
    }

    return (
        <>
            <div className='topBox'></div>
            <div className='resultsContainer resultContainer'>

                <div className="teams_scores">
                    {/* vertical line for center */}
                    <div className="verticalLine"></div>

                    <div className="team">
                        <span className='teamName'>KAL</span>
                        <span className='score'>2</span>
                    </div>
                    <div className="versus">
                        <span>V</span>
                    </div>
                    <div className="team">
                        <span className='teamName'>LIV</span>
                        <span className='score'>6</span>
                    </div>
                </div>


                <div className="resultNavbar">
                    <div style={{ left: underLine_left }} className="navUnderline"></div>
                    <NavLink to="info"  onClick={handleNavUnderLine} >
                        Info
                    </NavLink>
                    <NavLink to="videos"  onClick={handleNavUnderLine} >
                        Videos
                    </NavLink>

                </div>

                <Outlet/>
            </div>

        </>
    )
}

export default ResultDetails
