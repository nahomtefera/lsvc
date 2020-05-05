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
      // for (let i = 0; i < data.length; i++) {
      //   usersList += `<li class="username-item" id=${data[i].id}>` + 
      //     data[i].username + 
      //     `<div data-id=${data[i].id} class="camera-icon">` + 
      //     filmSVG + '</div>' + '</li>'
      // }
      // users.innerHTML = usersList

      // let activeUsers = $$(".camera-icon");
      // for(let i=0; i<activeUsers.length; i++) {
      //   activeUsers[i].addEventListener('click', (e)=>{
      //     let userId;
      //     if(e.target.tagName === 'svg') { userId = e.target.parentNode.dataset.id}
      //     else {userId = e.target.dataset.id}
      //     createOffer(userId)
      //   })
      // }
    });
  }

  render() { 
    let users = this.state.users;
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
                    <img src={require('./videosvg.svg')} alt="video-icon"/>
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