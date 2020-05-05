import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className='chat-container'>
          <div className="chat-messages"></div>

        <div className="send-message-container">
          <input type="text" className="chat-msg" />
          <button className="chat-btn">Send</button>
        </div>
      </div>
    );
  }
}
 
export default Chat;