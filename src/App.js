import React, { Component } from 'react';
import './App.css';

import Login from './Login';
import MainContainer from './MainContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }

login = (username) => {
  console.log('login function app is working', username);

this.setState({
  logged: true,
  username: username
})

}

  render() {
    console.log(this.state, ' inside of app component');

    return (
      <div className="App">

         {this.state.logged ?
        <MainContainer username={this.state.username}/> :
        <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
