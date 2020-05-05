import React, { Component } from 'react';
// socket
import {socket} from '../socketComp/socketComp'


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: []
    }
  }

  componentDidMount() {
    // Get user's data
    socket.on('get users', data => {
      this.setState({users: data})
    });
  }

  render() { 
    let users = this.state.users;
    let createOffer = this.props.createOffer // function to request video call
    return ( 
      <div className="users-container">
        <h3 styles={{fontWeight: '500', padding: '1em .5em'}}>Online Users</h3>
        <ul className="users-list">
          {
            users.map((user, index) => {
              return (
                <li key={index} className='username-item' id={user.id}>
                  {user.username}
                  <div className='camera-icon'>
                    <img onClick={()=>{createOffer(user.id)}} src={require('./videosvg.svg')} alt="video-icon"/>
                  </div>
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