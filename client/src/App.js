import React, { Component } from 'react';
import './App.css';
// Components
import Login from './components/login/login';
import {Socket} from './components/socketComp/socketComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      logged: false
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
            : null 
        }
      </div>
    );
  }
}
 
export default App;