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
    socket = io.connect('http://localhost:8080')
  }

  render() { 
    return null
  }
}
 
export {Socket, socket};