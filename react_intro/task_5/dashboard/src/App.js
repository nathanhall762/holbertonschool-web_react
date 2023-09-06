import React from "react";
import logo from "./holbertonlogo.jpg"; // Assuming the Holberton logo is saved in the same directory as 'holberton_logo.png'
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils.js";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>

      {/* Body */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        
        {/* Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>

        {/* OK Button */}
        <button type="button">OK</button>
      </div>

      {/* Footer */}
      <div className="App-footer">
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(false)}`}</p>
      </div>
    </div>
  );
}

export default App;
