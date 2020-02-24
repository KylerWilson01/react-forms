import React, { useState } from 'react'
import validator from 'validator'

export default props => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [cpassword, setCpassword] = useState('')
  const [cpasswordError, setCpasswordError] = useState('')

  const [website, setWebsite] = useState('')
  const [websiteError, setWebsiteError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    let valid = true

    if (name === '') {
      valid = false
      setNameError(' - Cannot be empty')
    } else {
      setNameError('')
    }

    if (!validator.isEmail(email)) {
      valid = false
      setEmailError(' - Please put a valid email')
    } else {
      setEmailError('')
    }

    if (username === '') {
      valid = false
      setUsernameError(' - Please enter a username')
    } else {
      setUsernameError('')
    }

    if (password === '') {
      valid = false
      setPasswordError(' - Please enter a password')
    } else {
      setPasswordError('')
    }

    if (!validator.equals(password, cpassword) || cpassword === '') {
      valid = false
      setCpasswordError(' - Does not match password')
    } else {
      setCpasswordError('')
    }

    if (!validator.isURL(website)) {
      valid = false
      setWebsiteError(' - Please enter a valid website')
    } else {
      setWebsiteError('')
    }

    if (valid) {
      props.history.push('/thankyou')
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <label className={nameError ? 'error' : ''} htmlFor="name">Name {nameError && nameError}</label> <br />
      <input className={nameError ? 'error' : ''} type="text" id="name" placeholder="John Smith" value={name} onChange={e => setName(e.target.value)} /> <br /><br />

      <label className={emailError ? 'error' : ''} htmlFor="email">Email {emailError && emailError} </label> <br />
      <input className={emailError ? 'error' : ''} type="email" id="email" placeholder="john@email.com" value={email} onChange={e => setEmail(e.target.value)} /> <br /><br />

      <label className={usernameError ? 'error' : ''} htmlFor="username">Username {usernameError && usernameError}</label> <br />
      <input className={usernameError ? 'error' : ''} type="text" id="username" placeholder="JohnSmith65" value={username} onChange={e => setUsername(e.target.value)} /> <br /><br />

      <label className={passwordError ? 'error' : ''} htmlFor="password">Password {passwordError && passwordError}</label> <br />
      <input className={passwordError ? 'error' : ''} type="password" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> <br /><br />

      <label className={cpasswordError ? 'error' : ''} htmlFor="cpassword">Confirm Password{cpasswordError && cpasswordError}</label> <br />
      <input className={cpasswordError ? 'error' : ''} type="password" id="cpassword" placeholder="password" value={cpassword} onChange={e => setCpassword(e.target.value)} /> <br /><br />

      <label className={websiteError ? 'error' : ''} htmlFor="website">Your Website {websiteError && websiteError}</label> <br />
      <input className={websiteError ? 'error' : ''} type="url" id="website" placeholder="https://www.johnsmith65.com" value={website} onChange={e => setWebsite(e.target.value)} /> <br /><br />
      <div className="button">
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}