import React from 'react'
import "./ClubNewsChild.css"
import { NavLink } from 'react-router-dom';

const ClubNewsChild = (props) => {

  const date = new Date(props.uploadDate)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className='clubNewsChild'>
      <NavLink to={ `/topics/club-news/newsDetails/${props.id}`} className='clubNewsChild_img'>
        <img src={props.img} alt="news" />
      </NavLink>

      <div className="clubNewsChild_info">
        <NavLink to={ `/topics/club-news/newsDetails/${props.id}`}>{props.des}</NavLink>

        <div className="clubNewsChild_date">
          <span>{months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</span>
          <NavLink to={ `/topics/club-news/newsDetails/${props.id}`}>Club News</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ClubNewsChild
