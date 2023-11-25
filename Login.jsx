import React from 'react'
import './Login.css';
function Login() {
  return (
    <div className='page'>
      <div className='form-box'>
        <h2 className='heading'>Login</h2>
        <form className='auth-form'>
            <div className='input-field'>
            <input type="text" placeholder='Enter name'/>
            <input type="email" placeholder='Enter Email'/>
            <input type="password" placeholder='Enter Password'/>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
