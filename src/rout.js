import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Signup from './Signup.js'
import Login from './login.js'
const Rout = () => {
  return (
    <>
    <Routes >
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
    </Routes>   
    </>
  )
}

export default Rout
