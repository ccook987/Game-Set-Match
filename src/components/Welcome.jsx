import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js'
import PlayerProfileForm from './PlayerProfileForm';

class Welcome extends Component {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.user ?
          <button onClick={this.logout}>Log Out</button>
          :
          <button onClick={this.login}>Log In</button>
        }
        {this.state.user ?
    <div>
    <div className='user-profile'>
      <img src={this.state.user.photoURL} />
    </div>
    </div>
    :
    <div className='wrapper'>
      <p>Please log in.</p>
    </div>
  }
        <PlayerProfileForm state={this.state}/>
      </div>
    );
  }
}

export default Welcome;
