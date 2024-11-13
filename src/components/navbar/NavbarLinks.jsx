import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { setValueToUnAuth } from '../../redux/user/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './NavbarLink.css'
import {
  setValueToFootball,
  setValueToBasketball,
} from '../../redux/game/gameSlice'

const NavbarLinks = () => {
  const dispatch = useDispatch()
  const authState = useSelector((state) => state.auth.authState)
  const navigate = useNavigate()

  const handleLogout = () => {
    window.sessionStorage.setItem('userdetails', '')
    window.sessionStorage.setItem('XSRF-TOKEN', '')
    dispatch(setValueToUnAuth())
    navigate('/login')
  }

  const [highlightedButton, setHighlightedButton] = useState('btn-1')

  const handleButtonClick = (button) => {
    console.log(`button clicked value is ${button}`)
    if (button === 'btn-1') {
      dispatch(setValueToFootball())
    } else {
      dispatch(setValueToBasketball())
    }
    setHighlightedButton(button)
  }

  return (
    <div className="w-100">
      <div style={{ marginLeft: '20%' }}>
        <div className="w-100 mb-3 border-white">
          <button
            className={`btn rounded-pill mt-2 border-white ${
              highlightedButton === 'btn-1' ? 'highlighted' : ''
            }`}
            onClick={() => handleButtonClick('btn-1')}
          >
            FOOTBALL
          </button>
          <button
            className={`btn rounded-pill ms-2 mt-2 border-white ${
              highlightedButton === 'btn-2' ? 'highlighted' : ''
            }`}
            onClick={() => handleButtonClick('btn-2')}
          >
            BASKETBALL
          </button>
        </div>
        <div
          className="collapse navbar-collapse w-100"
          style={{ marginLeft: '-17%' }}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            {/* news */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EVENTS
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="topics/club-news/">
                    ANNOUNCEMENTS
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* club */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ORGANIZATION
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {/* <li><NavLink className="dropdown-item" to="/club/">TEAM CLUB</NavLink></li> */}
                <li>
                  <NavLink className="dropdown-item" to="/owners/">
                    Owners
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/managers/">
                    Organizers
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* first team */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                RESULTS
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="results">
                    Result
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* academy */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ACADEMY
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {/* <li><NavLink className="dropdown-item" to="topics/academy/">ACADEMY NEWS</NavLink></li> */}
                <li>
                  <NavLink className="dropdown-item" to="academy/under-18/">
                    UNDER-18
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="academy/under-15/">
                    UNDER-15
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="academy/under-13/">
                    UNDER-13
                  </NavLink>
                </li>
              </ul>
            </li>
            {authState !== 'AUTH' && (
              <li className="nav-item">
                <NavLink
                  className="nav-link nav-item"
                  role="button"
                  aria-expanded="false"
                  to="/login"
                >
                  LOGIN
                </NavLink>
              </li>
            )}
            {authState === 'AUTH' && (
              <li className="nav-item">
                <NavLink
                  className="nav-link nav-item"
                  role="button"
                  aria-expanded="false"
                  // to="/login"
                  onClick={handleLogout}
                >
                  LOGOUT
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarLinks
