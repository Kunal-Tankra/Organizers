import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const LostPassword = () => {
  return (
    <div className="loginContainer" style={{ width: '80%', textAlign: 'left' }}>
      <div style={{ textAlign: 'left' }}>
        <h1>Lost Password</h1>
      </div>

      <form>
        <div className="inputDiv">
          <FontAwesomeIcon icon={faUser} style={{ paddingLeft: '10px' }} />
          <input
            type="text"
            name="email_or_userlogin"
            placeholder="Username or E-mail"
            className="forgotInput"
          ></input>
        </div>
        <div>
          <input
            type="submit"
            value="Get New Password"
            name="Submit"
            className="newPassword"
            style={{
              height: '45px',
              width: '320px',
              padding: '10px 30px',
            }}
          />
        </div>
      </form>
    </div>
  )
}

export default LostPassword
