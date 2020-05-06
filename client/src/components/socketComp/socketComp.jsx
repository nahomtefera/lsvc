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
    console.log(process.env.NODE_ENV)
    console.log(window.location.hostname)
    let socketUrl;
    process.env.NODE_ENV === 'production'
     ? socketUrl = 'https://livestreamm.herokuapp.com/'
     : socketUrl = 'localhost:8080'
    
    console.log(socketUrl)
    socket = io.connect(socketUrl, {secure: true})
  }

  render() { 
    return null
  }
}
 
export {Socket, socket};