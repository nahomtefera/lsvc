import React, { Component } from 'react';
import {socket} from '../socketComp/socketComp';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '', chatMessages: [] }
  }

  componentDidMount() {
    let newMessages = this.state.chatMessages;
    // when a message is received update chatMessages
    socket.on('new message', data => {
      newMessages.push(data)
      this.setState({chatMessages: newMessages})
    })
  }

  handleChange = (value, target) => {this.setState({[target]: value })} 

  sendMessage = (message) => { socket.emit('send message', message); this.setState({message: ''}) }

  render() { 
    let message = this.state.message;
    let chatMessages = this.state.chatMessages;
    let handleChange = this.handleChange;
    let sendMessage = this.sendMessage;
    return ( 
      <div className='chat-container'>
        <div className="chat-messages">
          {
            chatMessages.length === 0
              ? null
              : chatMessages.map((message, index) => {
                return <div key={index} className='chat-message'><strong>{message.user}</strong> {message.msg}</div>
              })
          }
        </div>

        <div className="send-message-container">
          <input type="text" className="chat-msg" onChange={(e)=>{handleChange(e.target.value, 'message')}} value={message}/>
          <button className="chat-btn" onClick={()=>{sendMessage(message)}}>Send</button>
        </div>
      </div>
    );
  }
}
 
export default Chat;