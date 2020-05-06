import React, { Component, Fragment } from 'react';
// Socket
import io from "socket.io-client";

let socket;

class Socket extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    process.env.NODE_ENV === 'development'
     ? socket = io.connect('http://localhost:8080')
     : socket = io.connect('https://localhost:8080')
  }

  render() { 
    return null
  }
}
 
export {Socket, socket};