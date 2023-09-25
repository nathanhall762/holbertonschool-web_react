import React from "react";
import { getFullYear, getFooterCopy } from "../Utils/utils";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

const styles = StyleSheet.create({
  footer: {
    position: "static",
    bottom: "0",
    borderTop: "0.5rem solid",
    borderColor: "rgb(224, 53, 75)",
    textAlign: "center",
    borderTop: "3px solid #e0354b",
  },
});

export default function Footer() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <footer className={css(styles.footer)}>
          {context.user.isLoggedIn ? (
            <a className={css(styles.link)} href="#">
              <p>Contact us</p>
            </a>
          ) : (
            <p>Already a member? Login for full access</p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
}
