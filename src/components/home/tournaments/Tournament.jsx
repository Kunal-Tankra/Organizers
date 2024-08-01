import React from 'react'
import './Tournament.css'
import { NavLink } from 'react-router-dom'

const Tournament = (props) => {
  const { id, event_category, event_date, event_image, event_title } = props

  return (
    <div className="tournament col col-4">
      <NavLink to={`tournament/${id}`}>
        <h2>{event_title}</h2>
      </NavLink>
      <div className="tournament_type_date">
        <h5>{event_category}</h5>
        <span>{event_date}</span>
      </div>
      <div className="tournamentImg">
        <NavLink to={`tournament/${id}`}>
          <img src={event_image} alt="tournament" />
        </NavLink>
      </div>
    </div>
  )
}

export default Tournament
