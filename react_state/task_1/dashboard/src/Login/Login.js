import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, () => {
      this.toggleEnableSubmit();
    });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, () => {
      this.toggleEnableSubmit();
    });
  }

  toggleEnableSubmit() {
    const { email, password } = this.state;
    if (email && password) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <main className='App-body'>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' value={email} onChange={this.handleChangeEmail} />
          
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' value={password} onChange={this.handleChangePassword} />
          
          <input type='submit' value='OK' disabled={!enableSubmit} />
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  // define any props here, if needed
};

export default Login;
