import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>MERN Google Oauth20 Boilerplate</h1>
        <a href='/auth/google'>Login With Google</a>
      </div>
    );
  }
}

export default App;
