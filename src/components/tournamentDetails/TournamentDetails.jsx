import React, { useEffect, useState } from 'react'
import "./TournamentDetails.css"
import { useParams } from 'react-router-dom'
import getApiData from '../../GetApiFunc'

const TournamentDetails = () => {
  const [eventData, setEventData] = useState({});

  // params
  const { id } = useParams()

  useEffect(() => {
    getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/events/${id}/`)
      .then(data => setEventData(data))
  }, [id]);

  // console.log(eventData)



  return (
    <>
      <div className="topBox"></div>

      <div className="tournamentDetails_container clubNews">
        <img src={eventData.event_image} alt="tournament" />

        {/* about tournament */}
        <h1>{eventData.event_title}</h1>


        <p>{eventData.event_description}</p>

        {/* rules */}
        <h1>Rules</h1>

        <ul className='tournamentRules' >
          {eventData.event_rules?.split("-").map((rule, idx )=> <li key={idx} >{rule}</li>)}

        </ul>

        {/* trophies */}
        <div style={{ width: '100%' }} className="honours_container">
          <h1>Trophy</h1>
          <div className='honours_items eventTrophy' >
            <img src={eventData.event_trophies} alt="icon" />
            <h3 className='honoursItems_tag'>{eventData.event_trophies_name}</h3>
          </div>
        </div>


        {/* organized by */}
        <h1>Organized by</h1>
        <h3>Andy </h3>

        <br></br>
        <button type="button" className="btn btn-outline-info resultBtn">Result</button>
      </div>

    </>
  )
}

export default TournamentDetails
