import React from 'react'
import banner from "./images/First-Team-Mugshot.webp"
import Students from './Students'

const Under15 = (props) => {
  return (
    <>
      <Students students={props.students} heading={"BFC Under-15s"} img={banner}/>
    </>
  )
}

export default Under15
