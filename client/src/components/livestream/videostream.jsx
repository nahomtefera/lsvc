import React, { Component } from 'react';

class VideoStream extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <div className='videostream-container'>
        <div id="video-container">
          <video className="video-stream" autoPlay muted></video>
        </div>
      </div>
    );
  }
}
 
export default VideoStream;