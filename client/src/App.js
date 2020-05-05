import React, { Component } from 'react';
import './App.css';
// socket.io
import io from "socket.io-client";

// import io from 'socket.io'
// Components
import Login from './components/login/login'

let socket;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLogged: false
    }
    socket = io.connect('http://localhost:8080')
  }

  login = (username) => {
    
    if (username != '') {
      socket.emit('new user', username, data => {
        if (data) {
          console.log(data)
          this.setState({isLogged: true})
          // userArea.style.display = 'none';
          // chatArea.style.display = 'grid';
        }
      })
    }
  }

  render() { 
    let isLogged = this.state.isLogged;

    return ( 
      <div className="App">
        {
          isLogged ? null : <Login login = {this.login} />
        }
      </div>
    );
  }
}
 
export default App;