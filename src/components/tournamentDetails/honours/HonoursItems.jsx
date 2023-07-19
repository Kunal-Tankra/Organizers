import React from 'react'
import "./HonoursItems.css"

const HonoursItems = (props) => {
  return (
    <div className='honours_items' >
        <img src={props.img} alt="icon" />
        <h3 className='honoursItems_tag'>{props.leagueName}</h3>
        <span>{props.year}</span>
    </div>
  )
}

export default HonoursItems
