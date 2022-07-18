import React from 'react'

export default function Register() {
  return (
    <>
      <h1>Sing Up</h1>
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
          <button>Sign Up</button>
        </div>
      </form>
    </>
  )
}
