import React, { useEffect, useState } from 'react'
import img from "./images/Academy.webp"
import "./AcademyNews.css"
import ClubNews from '../announcements/ClubNews'
import getApiData from '../../GetApiFunc'

const AcademyNews = () => {
  const [announcementsData, setAnnouncementsData] = useState([]);

  useEffect(() => {
    getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/announcements`)
    .then(datas=>{setAnnouncementsData(datas.filter(data=>data.news_type === "Academy"))})  
    .catch(err=>console.log(err))

  }, []);
  return (
    <>
        <img className="academyNewsImg" src={img} alt="news" />
        <ClubNews heading={"Academy"} announcementsData={announcementsData}/>
     
    </>
  )
}

export default AcademyNews
