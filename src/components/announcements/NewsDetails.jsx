import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './NewsDetails.css'
import getApiData from '../../GetApiFunc'

const NewsDetails = () => {
  const [newsData, setNewsData] = useState({})

  // query params
  const params = useParams()

  // date
  const date = new Date(newsData.uploadDate)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  useEffect(() => {
    getApiData(
      `${process.env.REACT_APP_APIKEY}/api/v1/announcements/${params.newsId}`
    ).then((data) => setNewsData(data))
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="login_BgImg">
        <img src={newsData.newsImage} alt="img" />
      </div>
      <h1>fadfafd</h1>
      {/* login box */}
      <div className="loginContainer clubNews newsDetails_container">
        <h1>{newsData.newsShortDesc}</h1>

        <div className="newsDetails_date">
          <p>
            {dayNames[date.getDay()]}, {date.getDate()}th{' '}
            {months[date.getMonth()]} {date.getFullYear()}
          </p>
          <p>Bengaluru FC Media</p>
        </div>

        <h2 className="newsDetails_clubNewsLink">
          {newsData.news_type === 'Overall' ? (
            <NavLink to="/topics/club-news/">Club News</NavLink>
          ) : (
            <NavLink to="/topics/academy/">Academy</NavLink>
          )}
        </h2>

        <p>{newsData.newsDescription}</p>

        {newsData.topScorer && (
          <p>
            <strong>Top Scorer:</strong> {newsData.topScorer}
          </p>
        )}
        {newsData.playerOfTheSeason && (
          <p>
            <strong>Player Of The Season:</strong> {newsData.playerOfTheSeason}
          </p>
        )}
        {newsData.goalOfTheSeason && (
          <p>
            <strong>Goal Of The Season:</strong> {newsData.goalOfTheSeason}
          </p>
        )}
        {newsData.emergingPlayer && (
          <p>
            <strong>Emerging Player:</strong> {newsData.emergingPlayer}
          </p>
        )}
      </div>
    </>
  )
}

export default NewsDetails
