import React, { useEffect, useState } from 'react'
import "./TournamentsContainer.css"
import Tournament from './Tournament'

const TournamentsContainer = (props) => {
  const {events} = props

  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    // initially set the events
    setFilteredEvents(events)
  }, [events]);

  // handle filter function
  const handleFilter = (category)=>{
    if(category === "open"){
      setFilteredEvents(events)
    }
    else{
      setFilteredEvents(events.filter(event=>event.event_category === category))
    }
  }


  return (
    <>
    
      <div className='tournamentsContaier' >
        <h1>Tournaments</h1>

        <div className="btn-group tournamentType">
          <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Type
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={()=>handleFilter("under13")} >Under 13</button>
            <button className="dropdown-item" onClick={()=>handleFilter("under15")} >Under 15</button>
            <button className="dropdown-item" onClick={()=>handleFilter("under18")} >Under 18</button>
            <button className="dropdown-item" onClick={()=>handleFilter("open")} >Open</button>
          </div>
        </div>

        {filteredEvents.map(event => <Tournament key={event.id} id={event.id}  event_category={event.event_category} event_date={event.event_date} event_image={event.event_image} event_title={event.event_title} />)}
      </div>
    </>
  )
}

export default TournamentsContainer
