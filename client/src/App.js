import React, { Component } from 'react';
import './App.css';
// Components
import {Socket} from './components/socketComp/socketComp'; // socket connection
import Login from './components/login/login';
import Livestream from './components/livestream/livestream';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      logged: true
    }
  }

  isLogged = () => {this.setState({logged: true})}

  render() { 
    let logged = this.state.logged;

    return ( 
      <div className="App">
        <Socket />
        { 
          !logged 
            ? <Login isLogged = {this.isLogged} /> 
            : <Livestream /> 
        }
      </div>
    );
  }
}
 
export default App;