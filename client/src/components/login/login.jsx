import React, { Component, Fragment } from 'react';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className='login-container'>
        <input autoComplete="off" type="text" id="username" />
        <button id="user-login-btn">Login</button>
      </div>
    );
  }
}
 
export default Login;