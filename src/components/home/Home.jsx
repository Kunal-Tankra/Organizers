import React from 'react'
import Carousel from './Carousel'
import "./Home.css"
import Membership from "./Membership-Website-2.png"
import Videos from './Videos'
import TournamentsContainer from './tournaments/TournamentsContainer'

const Home = () => {
    
    return (
        <>
            <Carousel />
            <a className='membership_img' href="https://insider.in/hero-isl-2022-23--bengaluru-fc-membership-season-ticket/event" target='__blank'>
                <img  src={Membership} alt="membership background" />
            </a>
            <TournamentsContainer/>
            <Videos/>


        </>
    )
}

export default Home
