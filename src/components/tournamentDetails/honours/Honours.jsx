import React, { useEffect, useState } from "react";
import "./Honours.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HonoursItems from "./HonoursItems";
import getApiData from "../../../GetApiFunc";


const Honours = (props) => {
    // trophy data
    const [trophyData, setTrophyData] = useState([]);


    useEffect(() => {
        getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/trophy`)
        .then(data=>setTrophyData(data))
        .catch(err=>console.log(err, "err in trophy"))
    }, []);

    const settings = {
        dots: true,

        // infinite depends on slides to show
        infinite: trophyData.length> 5,
        slidesToShow: 5,

        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };

    return (
        <div style={{width: props.width}} className="honours_container">
            <h1>Trophies</h1>
            <Slider {...settings}>
                {/* {trophyData.map(data=><HonoursItems key={data.id} img={data.trophyImage} leagueName={data.trophyName} year={data.trophyYear} />)} */}

                <HonoursItems  img={props.event_trophies} leagueName={props.event_trophies_name}  />

            </Slider>
        </div>
    )
}



export default Honours
