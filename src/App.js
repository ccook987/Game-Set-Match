import React, { Component } from 'react';
import GameSearch from './components/GameSearch';
import './App.scss';
import PlayerProfileForm from './components/PlayerProfileForm';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          <GameSearch/>
          <PlayerProfileForm />
      </div>
    );
  }
}

const mapStateToProps = state =>  {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
