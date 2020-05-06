import React, { Component } from 'react';
// socket
import {socket} from '../socketComp/socketComp'


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mySocketId: '',
      users: []
    }
  }

  componentDidMount() {
    // Get user's data
    // console.log('my socket id: ', socket.id)
    socket.on('get users', data => {
      let users = []; 
      data.map(user => {
        user.id == socket.id ? users.unshift(user) : users.push(user)
      })
      this.setState({users: users, mySocketId: socket.id})
    });
  }

  render() { 
    let users = this.state.users;
    let mySocketId = this.state.mySocketId;
    let createOffer = this.props.createOffer // function to request video call
    return ( 
      <div className="users-container">
        <h3 className='online-users-title'>Online Users</h3>
        <ul className="users-list">
          {
            users.map((user, index) => {
              return (
                <li key={index} className={user.id === mySocketId ? 'username-item my-username-item' : 'username-item'} id={user.id}>
                  { user.id === mySocketId
                    ? <span>Logged in as <strong>{user.username}</strong></span>
                    : user.username
                  }
                  {
                    user.id === mySocketId
                      ? null
                      : <div className='camera-icon'>
                          <img onClick={()=>{createOffer(user.id)}} src={require('./videosvg.svg')} alt="video-icon"/>
                        </div>
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
 
export default Users;