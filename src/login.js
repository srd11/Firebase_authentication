import React, { useState } from 'react'
import  {Link} from 'react-router-dom'
import './signup.css'
import firebase from './firebaseConfig'

const Login = () => {
    
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')

    const submit = async(e) => {
        e.preventDefault();
        try{
            const user = await firebase.auth().signInWithEmailAndPassword(email,pass)
            console.log(user)
            if(user){
                alert('Login Successfully')
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
                <h2>Login</h2>    
          </div>
        <div className='box'>
          <input type="text" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='box'>
          <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        </div>
          <p>Don't have an Account <Link to ="/">Create Account</Link></p>
          <button onClick={submit}>Login</button>
        </div>  


    </>
  )
}

export default Login
