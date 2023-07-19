import React from 'react'

const OwnerInfo = (props) => {
  return (
    <div className='squadPlayer'>
      <img src={props.img} alt="Player" />
      <p>{props.name}</p>
    </div>
  )
}

export default OwnerInfo
