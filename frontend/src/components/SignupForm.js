import React from 'react'
import {useNavigate} from 'react-router-dom'

import authStore from '../stores/authStore'

const SignupForm = () => {

    const store = authStore()
    const navigate = useNavigate()

      const handleSignup = async (e) => {
          e.preventDefault();
          await store.signup();

          //    navigation
          navigate('/login')
      }
  return (
     <form onSubmit={handleSignup}>
        <input onChange={store.updateSignupForm} value={store.signupForm.email} type="email" name="email"/>
        <input onChange={store.updateSignupForm} value={store.signupForm.password} type="password" name="password"/>
        <button type='submit'>Sign Up</button>
    </form>
  )
}

export default SignupForm