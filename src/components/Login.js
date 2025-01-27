import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase-config'
import {signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
    const [user, setUser] = useState({email:'', password:""})
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(user)
        try{
            const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password)
            console.log(userCredential)
            setIsLoggedIn(true)

        }catch(error){
            console.log(error.message)
        }
    }
  return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>
                    Email:
                    <input type='text' onChange={e => setUser((prevState) => ({...prevState, email: e.target.value}))}/>
                </label>
                <label>
                    Password:
                    <input type='password' onChange={e => setUser((prevState) => ({...prevState, password: e.target.value}))}/>
                </label>
                <button type='submit'>Login</button>
                <p>Don't have an account? <Link to={'/'}>Sign Up</Link></p>
                {isLoggedIn && <h5>{user.email} is logged in</h5>}
            </form>
        </div>
  )
}

export default Login
