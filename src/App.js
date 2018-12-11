import React, { Component } from 'react';
import GameSearch from './components/GameSearch';
import GameList from './components/GameList';
import './App.scss';
import PlayerProfileForm from './components/PlayerProfileForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <GameSearch/>
          <PlayerProfileForm />
          <GameList/>
      </div>
    );
  }
}

export default App;
