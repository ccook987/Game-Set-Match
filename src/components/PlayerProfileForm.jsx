import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';
import { connect } from 'react-redux';
import { loginUsers } from '../actions/index';

class PlayerProfileForm extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.state = {
      // players: [],
      // user: null
    }
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const playerRef = firebase.database().ref('players');
    const player = {
      playername: this.state.playername,
      platform: this.state.platform,
      gameTitle: this.state.gameTitle,
      platformUserId: this.state.platformUserId,
      user: this.state.user.displayName,
      googleEmail: this.state.user.email
    }
    playerRef.push(player);
    console.log(playerRef);
    this.setState({
      playername: '',
      platform: '',
      gameTitle: '',
      platformUserId: ''
    });
  }


  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  // login() {  probs can delete
  //   auth.signInWithPopup(provider)
  //     .then((result) => {
  //       const user = result.user;
  //       this.setState({
  //         user,
  //       });
  //     });
  // }

  removePlayer(playerId) {
    const playerRef = firebase.database().ref(`/players/${playerId}`);
    playerRef.remove();
  }

  // componentDidMount() {
  //   const playerRef = firebase.database().ref('players');
  //   playerRef.on('value', (snapshot) => {
  //     let players = snapshot.val();
  //     let newState = [];
  //     for (let player in players) {
  //       newState.push({
  //         id: player,
  //         playername: players[player].playername,
  //         platform: players[player].platform,
  //         gameTitle: players[player].gameTitle,
  //         platformUserId: players[player].platformUserId,
  //         googleEmail: players[player].googleEmail
  //       })
  //     }
  //     this.setState({
  //       players: newState
  //     });
  //   });

  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ user });
  //     }
  //   });
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          {this.props.user ?
            <button onClick={this.logout}>Log Out</button>
            :
            <button onClick={e => {e.preventDefault();
              this.props.dispatch(loginUsers())}}>Log In</button>
          }
          {this.state.user ?
              <div>
                <div className='user-profile'>

                </div>
                <div className='container'>
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" name="playername" placeholder="Name" onChange={this.handleChange} value={this.state.playername}/>
                    <input type="text" name="platform" placeholder="Platform" onChange={this.handleChange} value={this.state.platform}/>
                    <input type="text" name="gameTitle" placeholder="Game" onChange={this.handleChange} value={this.state.gameTitle}/>
                    <input type="text" name="platformUserId" placeholder="Steam/XBOX/PS ID" onChange={this.handleChange} value={this.state.platformUserId}/>
                    <button type='submit'>Submit</button>
                  </form>
                </div>
                <section className='display-player'>
                  <div className='wrapper'>
                    <ul>
                      {this.state.players.map((player) => {
                        return (
                          <li key={player.id}>
                            <h3>{player.playername}

                            </h3>
                            <p>Platform: {player.platform}</p>
                            <p>Game: {player.gameTitle}</p>
                            <p>Platform ID: {player.platformUserId}</p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </section>
              </div>
              :
              <div className='wrapper'>
                <p>Please log in.</p>
              </div>
            }
        </div>
      </div>
    );
  }
}
// {player.googleEmail === this.state.user.email ?
// <button onClick={() => this.removePlayer(player.id)}>Remove Player</button> : null}


// <img src={this.state.user.photoURL} />

export default connect()(PlayerProfileForm);
