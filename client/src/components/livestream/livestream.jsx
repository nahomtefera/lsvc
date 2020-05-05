import React, { Component } from 'react';
// components
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
        livestream container
        <Chat />
        <Videostream /> 
      </div>
    );
  }
}
 
export default Livestream;