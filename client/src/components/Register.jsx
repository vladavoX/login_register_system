import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { REGISTER_USER } from '../mutations/UserMutations'
import { GET_USERS } from '../queries/UserQueries'

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [registerUser] = useMutation(REGISTER_USER, {
    variables: { username, password },
    refetchQueries: [{ query: GET_USERS }]
  });

  const onSubmit = (e) => { 
    e.preventDefault();

    registerUser(username, password)
      .then(() => alert(`${username} has been registered`))

    setUsername('');
    setPassword('');
  }

  return (
    <>
      <h1>Sing Up</h1>
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
          <button type='submit'>Sign Up</button>
        </div>
      </form>
    </>
  )
}
