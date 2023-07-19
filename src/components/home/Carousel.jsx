import React, { useEffect, useState } from 'react'
import "./Carousel.css"
import { NavLink } from 'react-router-dom'

const Carousel = (props) => {
    const {events} = props

    const [carouselEvents, setCarouselEvents] = useState([]);
    
    useEffect(() => {
        // set initially
        setCarouselEvents(events.slice(0,5))

    }, [events]);

  

    
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {/* first */}
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

                    {/* remaining */}
                    {carouselEvents.map((event, idx) => {
                        // without first 
                        if (idx === 0) {
                            // eslint-disable-next-line
                            return
                        }
                        return (
                            <button key={event.id} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={idx} aria-label={`Slide ${idx + 1}`}></button>
                        )
                    })}


                </div>
                <div className="carousel-inner">
                    {/* first */}
                    <div className="carousel-item active">
                        <img src={carouselEvents[0]?.event_image} className="d-block w-100" alt="carouselImage" />
                        <div className="carousel-caption d-none d-md-block">

                            <NavLink to={`/tournament/${carouselEvents[0]?.id}`}>
                                <h5>{carouselEvents[0]?.event_title}</h5>
                            </NavLink>
                            {/* <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>

                    {/* remaining */}
                    {carouselEvents.map((event, idx) => {
                        // without first 
                        if (idx === 0) {
                            // eslint-disable-next-line
                            return
                        }

                        return (
                            <div key={event.id} className="carousel-item">
                                <img src={event.event_image} className="d-block w-100" alt="carouselImage" />
                                <div className="carousel-caption d-none d-md-block">
                                    <NavLink to={`/tournament/${event.id}`}>

                                        <h5>{event.event_title}</h5>
                                    </NavLink>
                                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                                </div>
                            </div>
                        )
                    })}


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
