import React from "react";
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0354b',
    borderBottom: '3px #e0354b solid',
    "@media (max-width: 900px)": {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  h1: {
    display: 'inline',
  },
  img: {
    width: '20rem',
    height: '20rem',
  }
});


export default function Header() {
  return (
    <header className={css(styles.header)}>
      <img src="../assets/holbie.jpg" alt="Holberton Logo" className={css(styles.img)}/>
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  );
}
