import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_USERS } from '../queries/UserQueries';

import './styles/Components.scss'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { data } = useQuery(GET_USERS);
  const success = document.getElementById('success-login');
  const failed = document.getElementById('failed-login');

  const onSubmit = (e) => { 
    e.preventDefault();
    
    if (data.users.find(user => user.username === username && user.password === password)) {
      failed.innerHTML = '';
      success.innerHTML = `<p>Logged in successfully as <strong>${username}</strong></p>`;

      setTimeout(() => { 
        success.innerHTML = '';
      }, 5000);
    } else {
      success.innerHTML = '';
      failed.innerHTML = `<p>Invalid password for <strong>${username}</strong> or user doesn't exist!</p>`;

      setTimeout(() => { 
        failed.innerHTML = '';
      }, 5000);
    }

    setUsername('');
    setPassword('');
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
