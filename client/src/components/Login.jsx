import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_USERS } from '../queries/UserQueries';

import './styles/Components.scss'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { data } = useQuery(GET_USERS);


  const onSubmit = (e) => { 
    e.preventDefault();
    
    if (data.users.find(user => user.username === username && user.password === password)) {
      alert(`${username} has been logged in`);
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
    </>
  )
}
