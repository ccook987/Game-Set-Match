import React, { Component } from 'react';
import GameSearch from './components/GameSearch';
import './App.scss';
import PlayerProfileForm from './components/PlayerProfileForm';
import { connect } from 'react-redux';
import Header from './components/Header';
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { fetchUser } from "./actions";

class App extends Component {
  componentWillMount(props) {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <GameSearch/>
        <Header/>
        <BrowserRouter>
          <div className="App">

            <Route path='/' component={requireAuth(PlayerProfileForm)}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
