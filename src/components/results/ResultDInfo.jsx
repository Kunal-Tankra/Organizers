import React from 'react'
import "./ResultDInfo.css"

const ResultDInfo = () => {
   
    return (
        <>
            <div className="resultInfo">
                <h5 >Tournament</h5>
                <span>Club Friendlies</span>
            </div>

            <div className="resultInfo">
                <h5 >Match Details</h5>

                <div className="infoSubHeading">
                    Match:
                </div>
                <span>Match #24, Tottenham Hotspur vs Leicester City, Club Friendlies</span>
            </div>
            <div className="resultInfo">

                <div className="infoSubHeading">
                Start Time:
                </div>
                <span>3:30 PM, 23 Jul, 2023</span>
            </div>
            <div className="resultInfo">

                <div className="infoSubHeading">
                Stadium/Venue:
                </div>
                <span>Rajamangala National Stadium</span>
            </div>
        </>
    )
}

export default ResultDInfo
