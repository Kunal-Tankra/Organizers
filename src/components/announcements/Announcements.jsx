import React, { useEffect, useState } from 'react'
import "./Announcements.css"
import ClubNews from './ClubNews'
import getApiData from '../../GetApiFunc';

const Announcements = () => {
  const [announcementsData, setAnnouncementsData] = useState([]);
  // for filtered data
  const [Filtered_announcementsData, setFiltered_AnnouncementsData] = useState([]);

  useEffect(() => {
    getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/announcements`)
      .then(datas => {
        // initially set all data
         setAnnouncementsData(datas)
         setFiltered_AnnouncementsData(datas)
        })
      .catch(err => console.log(err))

  }, []);

  // select type btn
  const handleTypeBtn =(e)=>{
    const currType = e.target.innerText
    if(currType === "Overall"){
      // set all data
      setFiltered_AnnouncementsData(announcementsData)
      return
    }
    // filtering
    setFiltered_AnnouncementsData(announcementsData.filter(data=> data.news_type === currType))
  }


  return (
    <>
      <div className="topBox"></div>

      <ClubNews heading={'Club News'} announcementsData={Filtered_announcementsData}>
        {/* dropdown for clubNews as children */}
        <div className="btn-group clubNews_selectType">
          <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Type
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={(e)=>handleTypeBtn(e)} >Overall</button>
            <button className="dropdown-item" onClick={(e)=>handleTypeBtn(e)} >Academy</button>
          </div>
        </div>
      </ClubNews>

    </>
  )
}

export default Announcements
