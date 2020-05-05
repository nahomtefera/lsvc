import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="users-container">
        <h3 styles={{fontWeight: '500', padding: '1em .5em'}}>Online Users</h3>
        <ul id="users-list">

        </ul>
      </div>
    );
  }
}
 
export default Users;