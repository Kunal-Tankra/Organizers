import React from 'react'
import "./SingleMatch.css"
import { NavLink } from 'react-router-dom'

const SingleMatch = (props) => {
    const { result_short_description, team_name1, team_name2, team_score1, team_score2 } = props
    return (
        <NavLink to="/" className='singleMatch'>
            <span className="matchType">
                Final
            </span>

            <div className="score">
                <span>{team_name1}</span>
                <span className='scoreNum'>{team_score1}
                    {/* <span className='afterScore'>(20)</span> */}
                </span>

            </div>
            <div className="score">
                <span>{team_name2}</span>
                <span className='scoreNum'>{team_score2}
                    {/* <span className='afterScore'>(20)</span> */}
                </span>

            </div>

            <p>{result_short_description}</p>
        </NavLink>
    )
}

export default SingleMatch
