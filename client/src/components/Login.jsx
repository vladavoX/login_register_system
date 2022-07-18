import React from 'react'

import './styles/Login.scss'

export default function Login() {
  return (
    <>
      <h1>Log In</h1>
      <form action="">
        <div className='row'>
          <input type="text" required />
          <label htmlFor="username">Username</label>
        </div>
        <div className='row'>
          <input type="password" required />
          <label htmlFor="password">Password</label>
        </div>
        <div className='row'>
          <button>Log In</button>
        </div>
      </form>
    </>
  )
}
