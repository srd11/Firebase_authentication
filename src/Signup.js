
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import firebase from './firebaseConfig'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState(null)

  const validatePassword = (password) => {
    // Add your password validation logic here
    // Example: At least 8 characters, including uppercase, lowercase, number, and special character
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  }

  const validateEmail = (email) => {
    // Add your email validation logic here
    // Example: Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const submit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!validatePassword(pass)) {
      setError('Password must be at least 8 characters and include uppercase, lowercase, number, and special character');
      return;
    }

    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, pass);
      console.log(user);
      if (user) {
        alert('User Created');
      }
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  }

  return (
    <>
      <div className='main_container_signup'>
        <div className='header'>
          <h2>Sign Up</h2>
        </div>
        <div className='box'>
          <input type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='box'>
          <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='box'>
          <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <p>Already have an Account <Link to="/login">Login Now</Link></p>
        <button onClick={submit}>Sign Up</button>
      </div>
    </>
  )
}

export default Signup
