import React, { Component } from 'react';

class VideoStream extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <div id="video-container" className='videostream-container'>
        <div className="video-inner-container">
          <video className="video-stream" autoPlay muted></video>
        </div>
      </div>
    );
  }
}
 
export default VideoStream;