import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setValueToAuth, setValueToUnAuth } from '../redux/user/authSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

axios.defaults.withCredentials = true

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [userMatchError, setUserMatchError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSuccessLogin = () => {
    dispatch(setValueToAuth())
  }

  const handleFailureLogin = () => {
    dispatch(setValueToUnAuth)
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
  }

  const handleSubmit = (e) => {
    console.log('before making an api call')
    e.preventDefault()
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/user',
        headers: {
          Authorization: `Basic ${btoa(
            `${formData.email}:${formData.password}`
          )}`,
        },
      }

      axios
        .request(config)
        .then((response) => {
          if (response.status === 200) {
            console.log('Cookies after login:', document.cookie) // Debugging line
            window.sessionStorage.setItem(
              'userdetails',
              JSON.stringify(response.data)
            )
            window.sessionStorage.setItem('XSRF-TOKEN', getCookie('XSRF-TOKEN'))
            handleSuccessLogin()
            navigate('/')
          } else {
            handleFailureLogin()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log(`Error ${error}`)
    }
    // window.sessionStorage.setItem('userdetails', JSON.stringify(formData))
    // const response = await GET(AppConstants.VALIDATE_USER)
  }

  return (
    <div className="loginContainer">
      <h1>Member Login</h1>
      <div>
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="ihcaction"
                value={formData.email}
                onChange={(e) => {
                  setFormData()
                }}
              />
              <input type="hidden" name="ihc_login_nonce" value="72303ca0b3" />
              {userMatchError}
              <div className="loginName">
                {/* <i class="fa-solid fa-user"></i> */}

                <FontAwesomeIcon icon={faUser} />
                <input
                  type="text"
                  id="iump_login_username"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="loginPassword">
                {/* <i class="fa-ihc fa-pass-ihc"></i> */}
                <FontAwesomeIcon icon={faLock} />
                <input
                  type="password"
                  id="iump_login_password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="forgot-password-container">
                <div>
                  <input
                    type="checkbox"
                    value="forever"
                    name="rememberme"
                    style={{ marginRight: '5px' }}
                  />
                  <span>Remember Me</span>
                </div>
                <div>
                  <a
                    href="/lost-password"
                    data-slimstat="5"
                    style={{ textDecoration: 'none', fontSize: '15px' }}
                  >
                    Lost your password?
                  </a>
                </div>
              </div>
              <div></div>
              <div style={{ width: '35%' }}>
                <input
                  className="loginBtn"
                  type="submit"
                  value="Log In"
                  name="Submit"
                />
              </div>
              <div>
                <div>
                  <span
                    style={{
                      color: 'black',
                      fontWeight: '400',
                    }}
                  >
                    Dont have an account?
                  </span>
                  <a
                    href={'/signup'}
                    data-slimstat="5"
                    style={{
                      textDecoration: 'none',
                      fontSize: '15px',
                      padding: '0px 10px',
                    }}
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

//https://www.bengalurufc.com/register/?lid=6

/*
add an interceptor 
*/
