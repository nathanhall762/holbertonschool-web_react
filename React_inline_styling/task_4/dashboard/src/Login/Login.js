import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  body: {
    padding: "1rem",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  input: {
    margin: "0.5rem",
  },
  button: {
    margin: "0.5rem",
    padding: "0.5rem",
  },
  // in mobile, Make sure that a label and an input are on each line
  // Make sure that the button is on a new line
});

export default function Login() {
  return (
    <main className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email</label>
      <input className={css(styles.input)} type="email" name="email"></input>
      <label htmlFor="password">Password</label>
      <input
        className={css(styles.input)}
        type="password"
        name="password"
      ></input>
      <button className={css(styles.button)}>OK</button>
    </main>
  );
}
