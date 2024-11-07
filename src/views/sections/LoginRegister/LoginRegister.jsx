import React from 'react'
import logo from './../../../images/logo_white.svg'

const LoginRegister = () => {
  return (
    <>
      <div className='login-register'>
        <div>
          <img src={logo} alt="" />
        </div>
        <a className='btn-social' href="/login">Login</a>
        <a className='btn-gry' href="/register">Sign Up</a>
      </div>
    </>
  )
}

export default LoginRegister