import React, { Component, Fragment } from 'react';
import './login.css';
import {socket} from '../socketComp/socketComp'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: ''}
  }

  handleChange = (value, target) => {this.setState({[target]: value })} 

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.login()
    }
  }

  login = () =>{
    let username = this.state.username;
    // If username field is not blank emit new user
    if (username != '') {
      socket.emit('new user', username, data => {
        if (data) {
          console.log(data)
          this.props.isLogged() // update App state to isLogged: true
        }
      })
    }
  }

  render() { 
    let username = this.state.username;
    let handleChange = this.handleChange;

    return ( 
      <div className='login-container'>
        <input autoComplete="off" type="text" className='username'
          onKeyPress={this.handleKeyPress}
          onChange={(e) => {handleChange(e.target.value, 'username')}} 
          value={username} 
        />
        
        <button onClick={()=>{this.login()}} id="user-login-btn">Login</button>
      </div>
    );
  }
}
 
export default Login;