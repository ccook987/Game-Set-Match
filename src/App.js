import GameSearch from './components/GameSearch';
import GameList from './components/GameList';
import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PlayerCreationForm from './components/PlayerCreationForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <PlayerCreationForm />
          <GameSearch/>
          <GameList/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
