import React, { Component } from 'react';
import './App.scss';
import PlayerProfileForm from './components/PlayerProfileForm';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PlayerProfileForm />
      </div>
    );
  }
}

export default App;
