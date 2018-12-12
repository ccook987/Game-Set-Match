import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';
import { connect } from 'react-redux';

function PlayerProfileForm({props}) {
  console.log(props);
  // constructor(props) {
  //   super(props);
  //   const { dispatch } = props;
  //   this.state = {
  //     // games: [],
  //     players: [],
  //     // user: null
  //   }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.logout = this.logout.bind(this);
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const playerRef = firebase.database().ref('players');
  //   const player = {
  //     playername: this.state.playername,
  //     platform: this.state.platform,
  //     gameTitle: this.state.gameTitle,
  //     platformUserId: this.state.platformUserId,
  //     user: this.state.user.displayName,
  //     googleEmail: this.state.user.email
  //   }
  //   playerRef.push(player);
  //   console.log(playerRef);
  //   this.setState({
  //     playername: '',
  //     platform: '',
  //     gameTitle: '',
  //     platformUserId: ''
  //   });
  // }

  //
  // logout() {
  //   auth.signOut()
  //   .then(() => {
  //     this.setState({
  //       user: null
  //     });
  //   });
  // }

  // login() {  probs can delete
  //   auth.signInWithPopup(provider)
  //     .then((result) => {
  //       const user = result.user;
  //       this.setState({
  //         user,
  //       });
  //     });
  // }

  // removePlayer(playerId) {
  //   const playerRef = firebase.database().ref(`/players/${playerId}`);
  //   playerRef.remove();
  // }

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

    return (
      <div>
        <div>
              <div>
                {this.props.user ?
                <div className='container'>
                  <form>
                    <input type="text" name="playername" placeholder="Name"  />
                    <input type="text" name="platform" placeholder="Platform" />
                    <input type="text" name="gameTitle" placeholder="Game" />
                    <input type="text" name="platformUserId" placeholder="Steam/XBOX/PS ID" />
                    <button type='submit'>Submit</button>
                  </form>
                </div> :
                <h3>idiot... please log in</h3> }
                <section className='display-player'>
                  <div className='wrapper'>

                  </div>
                </section>
              </div>


        </div>
      </div>
    );
}

// <ul>
//   {this.state.players.map((player) => {
//     return (
//       <li key={player.id}>
//         <h3>{player.playername}
//
//         </h3>
//         <p>Platform: {player.platform}</p>
//         <p>Game: {player.gameTitle}</p>
//         <p>Platform ID: {player.platformUserId}</p>
//       </li>
//     )
//   })}
// </ul>

// :
// <div className='wrapper'>
//   <p>Please log in.</p>
// </div>

// {player.googleEmail === this.state.user.email ?
// <button onClick={() => this.removePlayer(player.id)}>Remove Player</button> : null}


// <img src={this.state.user.photoURL} />


export default PlayerProfileForm;
