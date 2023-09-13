import React from 'react';
import './Login.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    padding: '4rem',
    textAlign: 'center',
  },
  input: {
    margin: '0.5rem',
  },
  button: {
    margin: '0.5rem',
    padding: '0.5rem',
  },
});


export default function Login() {
  return (
    <main className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input className={css(styles.input)} type='email' name='email'></input>
      <label htmlFor='password'>Password</label>
      <input className={css(styles.input)} type='password' name='password'></input>
      <button className={css(styles.button)}>OK</button>
    </main>
  );
}
