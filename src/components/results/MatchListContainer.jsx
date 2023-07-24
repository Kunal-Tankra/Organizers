import React from 'react'
import "./MatchListContainer.css"
import { NavLink } from 'react-router-dom'
import SingleMatch from './SingleMatch'

const MatchListContainer = (props) => {
    const {matcheResults,event_title, id} = props
    return (
        <div className='matchListContainer'>
            <NavLink to={`/results/${id}`}>
                {event_title}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#16134ed1" xmlns="http://www.w3.org/2000/svg" className="match-liststyled__ArrowForwardIcon-sc-1svjpru-3 hUvLeb"><path d="M5.21 13.002h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 000-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41l4.87 4.89H5.21c-.55 0-1 .45-1 1s.45 1 1 1z" fill="#16134ed1"></path></svg>
            </NavLink>

            <div className="allMatches">
                {matcheResults?.slice(0,3).map(result=><SingleMatch key={result.id} id={result.id} fixture={result.fixture} result_short_description={result.result_short_description} team_name1={result.team_name1} team_name2={result.team_name2} team_score1={result.team_score1}   team_score2={result.team_score2} />)}
            </div>

        </div>
    )
}

export default MatchListContainer
