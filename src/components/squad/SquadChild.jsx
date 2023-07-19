import React from 'react'
import "./SquadChild.css"
import SquadPlayer from './SquadPlayer'

const SquadChild = (props) => {
  return (
    <div className='squadChild'>
      <h2>{props.heading}</h2>
      

      <div className="squadPlayers_container">
        {props.typeData.map(player=><SquadPlayer key={player.id} player_jersey={player.player_jersey} name={player.player_name} img={player.player_image}/>)}
      </div>
    </div>
  )
}

export default SquadChild
