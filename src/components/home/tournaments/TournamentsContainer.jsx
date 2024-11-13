import React, { useEffect, useState } from 'react'
import './TournamentsContainer.css'
import Tournament from './Tournament'
import { useSelector } from 'react-redux'

const TournamentsContainer = (props) => {
  const { events } = props

  const [filteredEvents, setFilteredEvents] = useState([])

  const gameState = useSelector((state) => state.game.gameSelected)

  useEffect(() => {
    // initially set the events
    setFilteredEvents(events)
  }, [events])

  // handle filter function
  const handleFilter = (category) => {
    if (category === 'open') {
      setFilteredEvents(events)
    } else {
      setFilteredEvents(
        events.filter((event) => event.event_category === category)
      )
    }
  }

  const footballEventArrayDummy = [
    {
      name: 'Football Event A',
      team1: 'Team A',
      team2: 'Team B',
      date: '20 July 2024',
      time: '12:00 PM',
      venue: 'South United FC',
    },
    {
      name: 'Football Event B',
      team1: 'Team A',
      team2: 'Team B',
      date: '20 July 2024',
      time: '12:00 PM',
      venue: 'South United FC',
    },
    {
      name: 'Football Event C',
      team1: 'Team A',
      team2: 'Team B',
      date: '20 July 2024',
      time: '12:00 PM',
      venue: 'South United FC',
    },
    {
      name: 'Football Event D',
      team1: 'Team A',
      team2: 'Team B',
      date: '20 July 2024',
      time: '12:00 PM',
      venue: 'South United FC',
    },
  ]

  const basketballEventArrayDummy = [
    {
      name: 'Basketball Event A',
      team1: 'Team A',
      team2: 'Team B',
      date: '30 August 2024',
      time: '09:00 PM',
      venue: 'Play Zone Sarjapur',
    },
    {
      name: 'Basketball Event B',
      team1: 'Team A',
      team2: 'Team B',
      date: '30 August 2024',
      time: '09:00 PM',
      venue: 'Play Zone Sarjapur',
    },
    {
      name: 'Basketball Event C',
      team1: 'Team A',
      team2: 'Team B',
      date: '30 August 2024',
      time: '09:00 PM',
      venue: 'Play Zone Sarjapur',
    },
  ]

  let event = []

  if (gameState === 'football') {
    event = footballEventArrayDummy
  } else {
    event = basketballEventArrayDummy
  }

  return (
    <>
      <div className="tournamentsContaier">
        <h1>Events</h1>
        <div className="events-container row gx-1">
          {event.map((e, index) => {
            return (
              <div
                className="card col col-5 p-4 shadow shadow-lg"
                style={{
                  marginRight: '50px',
                  marginBottom: '30px',
                }}
                key={index}
              >
                <div className="d-flex w-100 justify-content-between">
                  <div>
                    <img src={e?.team1Logo} alt="team 1 logo" />
                    <div className="text-center">{e.team1}</div>
                  </div>
                  <div className="pt-3">V/S</div>
                  <div>
                    <img src={e?.team2Logo} alt="team 2 logo" />
                    <div className="text-center">{e.team2}</div>
                  </div>
                </div>
                <br />
                <div className="text-center">
                  {e.date}, {e.time}
                </div>
                <div className="text-center">{e.venue}</div>
                {/* <img src="/images/basketball/basketballVs.png" /> */}
              </div>
            )
          })}
        </div>
        {/* 
        <div className="btn-group tournamentType">
          <button
            type="button"
            className="btn btn-info dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Type
          </button>
          <div className="dropdown-menu">
            <button
              className="dropdown-item"
              onClick={() => handleFilter('under13')}
            >
              Under 13
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleFilter('under15')}
            >
              Under 15
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleFilter('under18')}
            >
              Under 18
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleFilter('open')}
            >
              Open
            </button>
          </div>
        </div> */}

        {/* <div className="container">
          <div className="row">
            {events.map((event) => (
              <Tournament
                key={event.id}
                id={event.id}
                event_category={event.event_category}
                event_date={event.event_date}
                event_image={event.event_image}
                event_title={event.event_title}
              />
            ))}
          </div>
        </div> */}
      </div>
    </>
  )
}

export default TournamentsContainer
