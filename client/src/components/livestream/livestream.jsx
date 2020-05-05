import React, { Component } from 'react';
// css
import './livestream.css';
// components
import Users from './users';
import Chat from './chat';
import Videostream from './videostream';

class Livestream extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className='livestream-container'>
        <Users />
        <Chat />
        <Videostream /> 
      </div>
    );
  }
}
 
export default Livestream;