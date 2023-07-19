import React from 'react'
import SquadPlayer from '../squad/SquadPlayer'

const StudentsChild = (props) => {
  return (
    <div className='squadChild'>
      <h2>{props.heading}</h2>
      

      <div className="squadPlayers_container">
        {props.typeData.map(player=><SquadPlayer key={player.id} player_jersey={player.student_jersey_no} name={player.student_name} img={player.student_image}/>)}
      </div>
    </div>
  )
}

export default StudentsChild
