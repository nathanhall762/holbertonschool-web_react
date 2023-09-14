import React from "react";
import { getFullYear, getFooterCopy } from "../Utils/utils";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  footer: {
    position: "static",
    width: "100%",
    bottom: "0",
    borderTop: "0.5rem solid",
    borderColor: "rgb(224, 53, 75)",
    textAlign: "center",
    borderTop: "3px solid rgb(224, 53, 75)",
  },
});

export default function Footer() {
  return (
    <footer className={css(styles.footer)}>
      <p>
        <i>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </i>
      </p>
    </footer>
  );
}
