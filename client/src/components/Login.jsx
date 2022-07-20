import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN_USER } from '../mutations/UserMutations';

import './styles/Components.scss'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: { username, password },
  })

  const success = document.getElementById('success-login');
  const failed = document.getElementById('failed-login');

  const onSubmit = (e) => {
    e.preventDefault();

    loginUser(username, password).then(res => { 
      failed.innerHTML = '';
      success.innerHTML = `<p>Logged in successfully as <strong>${username}</strong></p>`;

      setTimeout(() => {
        success.innerHTML = '';
      }, 5000);
    }).catch(err => { 
      success.innerHTML = '';
      failed.innerHTML = `<p>Invalid username or password</p>`;

      setTimeout(() => {
        failed.innerHTML = '';
      }, 5000);
    }).finally(() => { 
      setUsername('');
      setPassword('');
    })    
  }

  return (
    <>
      <h1>Log In</h1>
      <form action="" onSubmit={onSubmit}>
        <div className='row'>
          <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="username">Username</label>
        </div>
        <div className='row'>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="password">Password</label>
        </div>
        <div className='row'>
          <button type='submit'>Log In</button>
        </div>

      </form>
      <div id='success-login' className='success'>

      </div>
      <div id='failed-login' className='failed'>

      </div>
    </>
  )
}
