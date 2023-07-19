import React from 'react'
import "./Carousel.css"
import { NavLink } from 'react-router-dom'

const Carousel = () => {
    const arr = [
        { img: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" },
        { img: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" },
        { img: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" },
        { img: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" },
        { img: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" }
    ]
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {/* first */}
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

                    {/* remaining */}
                    {arr.map((data, idx) => {
                        // without first 
                        if (idx === 0) {
                            // eslint-disable-next-line
                            return
                        }
                        return (
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={idx} aria-label={`Slide ${idx + 1}`}></button>
                        )
                    })}


                </div>
                <div className="carousel-inner">
                    {/* first */}
                    <div className="carousel-item active">
                        <img src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" className="d-block w-100" alt="carouselImage" />
                        <div className="carousel-caption d-none d-md-block">

                            <NavLink to="/tournament">
                                <h5>First slide label Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo</h5>
                            </NavLink>
                            {/* <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>

                    {/* remaining */}
                    {arr.map((data, idx) => {
                        // without first 
                        if (idx === 0) {
                            // eslint-disable-next-line
                            return
                        }

                        return (
                            <div className="carousel-item">
                                <img src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" className="d-block w-100" alt="carouselImage" />
                                <div className="carousel-caption d-none d-md-block">
                                    <NavLink to="/tournament">

                                        <h5>{idx} First slide label Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo</h5>
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
