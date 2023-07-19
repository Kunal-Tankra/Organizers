import React from 'react'
import "./ClubNews.css"
import ClubNewsChild from './ClubNewsChild'

const ClubNews = (props) => {
  

    return (
        <div className='clubNews'>
            <h2>Latest on {props.heading}</h2>
            {/* dropdown from parent */}
            {props.children}  

            <div className='clubNews_childrenContainer'>

                {props.announcementsData.map(data=><ClubNewsChild key={data.id} id={data.id} img={data.newsImage} des={data.newsShortDesc} uploadDate={data.uploadDate} />)}
                
            </div>
        </div>
    )
}

export default ClubNews
