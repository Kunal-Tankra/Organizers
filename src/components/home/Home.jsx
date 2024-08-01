import React, { useEffect } from 'react'
import Carousel from './Carousel'
import './Home.css'
import Membership from './Membership-Website-2.png'
import Videos from './Videos'
import TournamentsContainer from './tournaments/TournamentsContainer'
import { events } from '../../data'

const Home = () => {
  // const [events, setEvents] = useState([])

  useEffect(() => {
    // fetching events
    // getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/events/`).then((data) =>
    //   setEvents(data, 'data')
    // )
  }, [])

  return (
    <>
      <Carousel events={events} />
      <a
        className="membership_img"
        href="https://insider.in/hero-isl-2022-23--bengaluru-fc-membership-season-ticket/event"
        target="__blank"
      >
        <img src={Membership} alt="membership background" />
      </a>
      <TournamentsContainer events={events} />
      <Videos />
    </>
  )
}

export default Home
