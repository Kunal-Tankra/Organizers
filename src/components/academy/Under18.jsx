import React from 'react'
import banner from "./images/First-Team-Mugshot.webp"
import Students from './Students'

const Under18 = (props) => {
  return (
    <>
      <Students students={props.students} heading={"BFC Under-18s"} img={banner}/>
    </>
  )
}

export default Under18
