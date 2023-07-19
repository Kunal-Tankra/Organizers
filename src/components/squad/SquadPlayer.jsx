import React from 'react'
import "./SquadPlayer.css"

const SquadPlayer = (props) => {
  return (
    <div className='squadPlayer'>
      <img src={props.img} alt="Player" />
      <p><span className='squadPlayer_num'>{props.player_jersey}.</span> {props.name}</p>
    </div>
  )
}

export default SquadPlayer
