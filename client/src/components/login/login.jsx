import React, { Component, Fragment } from 'react';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: ''
    }
  }
  
  handleChange = (value, target) => {
    this.setState({[target]: value })
  } 

  render() { 
    let username = this.state.username;
    let handleChange = this.handleChange;
    return ( 
      <div className='login-container'>
        <input autoComplete="off" type="text" className='username'
          onChange={(e) => {handleChange(e.target.value, 'username')}} 
          value={username} 
        />
        
        <button onClick={()=>{this.props.login(username)}} id="user-login-btn">Login</button>
      </div>
    );
  }
}
 
export default Login;