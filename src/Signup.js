import React, { useState } from 'react'
import  {Link} from 'react-router-dom'
import './signup.css'
import firebase from './firebaseConfig'

const Signup = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')

    const submit = async(e) => {
        e.preventDefault();
        try{
            const user = await firebase.auth().createUserWithEmailAndPassword(email,pass)
            console.log(user)
            if(user){
                alert('User Created')
            }
        }
        catch(e){
            console.log(e)
            alert(e)
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
          <p>Already have an Account <Link to ="/login">Login Now</Link></p>
          <button onClick={submit}>Sign Up</button>
        </div>  


    </>
  )
}

export default Signup
