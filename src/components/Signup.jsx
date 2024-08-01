import React, { useState, useEffect } from 'react'
import flatpickr from 'flatpickr'

const Signup = () => {
  useEffect(() => {
    flatpickr('#dob', {
      dateFormat: 'Y-m-d', // Customize date format if needed
    })
  }, [])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    instaHandle: '',
  })

  const [passwordMatchError, setPasswordMatchError] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true)
      return
    }
    fetch('http://localhost:8081/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to sign up')
        }
        return response.json()
      })
      .then((data) => {
        // Handle successful response from backend
        console.log(data)
        window.location.href = '/login'
      })
      .catch((error) => {
        // Handle error
        console.error(error)
        // Show error message to user
      })
  }

  return (
    <div className="signup-container">
      <p
        style={{
          fontSize: '51.2px',
          color: '#444444',
          fontFamily:
            '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        Register
      </p>
      <form
        onSubmit={handleSubmit}
        // method="post"
        // name="createuser"
        // id="createuser"
        // encType="multipart/form-data"
        className="signup-form"
      >
        <div>
          <label>
            <span className="required">*</span>First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder=""
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <span className="required">*</span>Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder=""
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="dob">
            <span className="required">*</span>Date of Birth
          </label>
          <input
            type="text"
            id="dob"
            name="dob"
            placeholder="Select Date of Birth"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <span className="required">*</span>Email
          </label>
          <input
            type="text"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <span className="required">*</span>Mobile Number
          </label>
          <input
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <span className="required">*</span>Password
          </label>
          <input
            type="password"
            name="password"
            placeholder=""
            data-rules="6,1"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <span className="required">*</span>Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder=""
            data-rules="6,1"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {passwordMatchError && <p>Passwords do not match</p>}
        </div>
        <div>
          <label>
            <span className="required">*</span>Instagram Handle
          </label>
          <input
            type="text"
            name="instaHandle"
            placeholder=""
            value={formData.instaHandle}
            onChange={handleChange}
          />
        </div>
        <div style={{ width: '80%' }}>
          <input id="signUpBtn" type="submit" value="Sign Up" name="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Signup
