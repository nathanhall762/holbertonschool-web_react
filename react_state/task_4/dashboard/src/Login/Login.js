import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
    [screenSize.small]: {
      marginTop: "10px",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
});


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);  // Call the logIn function from App component
  }

  handleChangeEmail(event) {
    const { value } = event.target;
    const { password } = this.state;

    if (value !== "" && password !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    const { value } = event.target;
    const { email } = this.state;

    if (email !== "" && value !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ password: event.target.value });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <main className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form action="" onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
            className={css(styles.loginInput)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
            className={css(styles.loginInput)}
          />
          <input
            type="submit"
            onClick={this.handleLoginSubmit}
            value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default Login;
