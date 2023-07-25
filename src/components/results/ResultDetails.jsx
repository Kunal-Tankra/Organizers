import React, { useContext, useEffect, useState } from 'react'
import "./ResultDetails.css"
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import getApiData from '../../GetApiFunc';
import AllContexts from '../../context/AppContext';

const ResultDetails = () => {
    // left position of underline
    const [underLine_left, setUnderLine_left] = useState("0");

    //    context
    const { resultData, setResultData } = useContext(AllContexts)

    // handle under line left position
    const handleNavUnderLine = (e) => {
        setUnderLine_left(e.target.offsetLeft + "px")
    }

    // params
    const { id } = useParams()

    useEffect(() => {
        getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/result/${id}/`)
            .then(data => setResultData(data))
    }, [id]);

    // router
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        // set child route initially -> info
        navigate(`/result/${id}/info`, { replace: true })

        
    }, []);

   

    return (
        <>
            <div className='topBox'></div>
            <div className='resultsContainer resultContainer'>

                <div className="teams_scores">
                    {/* vertical line for center */}
                    <div className="verticalLine"></div>

                    <div className="team">
                        <span className='teamName'>{resultData.team_name1.toUpperCase()}</span>
                        <span className='score'>{resultData.team_score1}</span>
                    </div>
                    <div className="versus">
                        <span>V</span>
                    </div>
                    <div className="team">
                        <span className='teamName'>{resultData.team_name2.toUpperCase()}</span>
                        <span className='score'>{resultData.team_score2}</span>
                    </div>
                </div>


                <div className="resultNavbar">
                    <div style={{ left: underLine_left }} className="navUnderline"></div>
                    <NavLink to="info" onClick={handleNavUnderLine} >
                        Info
                    </NavLink>
                    <NavLink to="videos" onClick={handleNavUnderLine} >
                        Videos
                    </NavLink>

                </div>

                <Outlet />
            </div>

        </>
    )
}

export default ResultDetails
