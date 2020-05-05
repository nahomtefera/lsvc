import React, { Component } from 'react';
import './App.css';
// socket.io
import io from "socket.io-client";

// import io from 'socket.io'
// Components
import Login from './components/login/login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLogged: false
    }
  }

  componentDidMount() {
    let socket = io.connect('http://localhost:8080')
  }

  render() { 
    let isLogged = this.state.isLogged;

    return ( 
      <div className="App">
        {
          isLogged ? null : <Login />
        }
      </div>
    );
  }
}
 
export default App;