import React, { useEffect, useState } from 'react'
import "./TournamentsContainer.css"
import Tournament from './Tournament'
import getApiData from '../../../GetApiFunc';

const TournamentsContainer = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/events/`)
      .then(data => setEvents(data, "data"))
  }, []);


  return (
    <>
      <div className='tournamentsContaier' >
        <h1>Tournaments</h1>

        <div className="btn-group tournamentType">
          <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Type
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={(e) => console.log(e)} >Overall</button>
            <button className="dropdown-item" onClick={(e) => console.log(e)} >Academy</button>
          </div>
        </div>

        {events.map(event => <Tournament key={event.id} id={event.id}  event_category={event.event_category} event_date={event.event_date} event_image={event.event_image} event_title={event.event_title} />)}
      </div>
    </>
  )
}

export default TournamentsContainer
