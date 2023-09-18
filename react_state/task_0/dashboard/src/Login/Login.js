import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <main className='App-body'>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email'></input>
      <label htmlFor='password'>Password</label>
      <input type='password' name='password'></input>
      <button>OK</button>
    </main>
  );
}
