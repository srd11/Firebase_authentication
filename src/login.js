

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import firebase from './firebaseConfig'

const Login = () => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState(null)

  const validateEmail = (email) => {
    // Add your email validation logic here
    // Example: Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validatePassword = (password) => {
    // Add your password validation logic here
    // Example: At least 8 characters, including uppercase, lowercase, number, and special character
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  }

  const submit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!validatePassword(pass)) {
      setError('Entered password is wrong');
      return;
    }

    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, pass)
      console.log(user)
      if (user) {
        alert('Login Successfully')
      }
    } catch (e) {
      console.log(e)
      alert(e.message)
    }
  }

  return (
    <>
      <div className='main_container_signup'>
        <div className='header'>
          <h2>Login</h2>
        </div>
        <div className='box'>
          <input type="text" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='box'>
          <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <p>Don't have an Account <Link to="/">Create Account</Link></p>
        <button onClick={submit}>Login</button>
      </div>
    </>
  )
}

export default Login

