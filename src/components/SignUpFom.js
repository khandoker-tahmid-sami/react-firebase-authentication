import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import '../style.css'
const SignUpFom = () => {
  const [user, setUser] = useState({email:'', password:''})

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(user.email)
    console.log(user.password)

    try{
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
      console.log(userCredential)
    }catch(error){
      console.log(error.message)
    }
  }
  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>
            Email:
            <input type='text' onChange={e => setUser((prevState) => ({...prevState, email: e.target.value}))}/>
        </label>
        <label>
            Password:
            <input type='password' onChange={e => setUser((prevState) => ({...prevState, password: e.target.value}))}/>
        </label>
        <button type='submit'>Sign Up</button>
        <p>Already Registered? <Link to={'login'}>Login</Link></p>
      </form>
    </div>
  )
}

export default SignUpFom
