import React from "react";
import "./Header.css";
import logo from "../assets/holbie.jpg";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </header>
  );
}
