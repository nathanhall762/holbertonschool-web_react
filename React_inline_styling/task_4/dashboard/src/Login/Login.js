import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  body: {
    padding: "4rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: "0.5rem",
    width: "90vw"
  },
  button: {
    margin: "0.5rem",
    padding: "0.5rem",
    width: "50vw",
  },
  // in mobile, Make sure that a label and an input are on each line
  // Make sure that the button is on a new line
  "@media (max-width: 900px)": {
    body: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "100%",
    },
    button: {
      width: "100%",
    },
  },
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
