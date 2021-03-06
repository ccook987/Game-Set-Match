import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { auth, googleAuthProvider } from '../actions';
import GameList from './GameList';
import GameSearch from './GameSearch';

class PlayerCreationForm extends Component {
  constructor(props, { state }) {
    super(props, { state });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(e) {
    this.setState({
       [e.target.name]: e.target.value
     });
     console.log(this.state);
   }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    const playerRef = firebase.database().ref('players');
    const player = {
      playerName: this.state.playerName,
      platform: this.state.platform,
      gameTitle: this.props.state.selectedGame.gameTitle,
      platformUserId: this.state.platformUserId,
      googleEmail: this.state.user.email,
      user: this.state.user.displayName || this.state.user.email
    }
    playerRef.push(player);
    this.setState({
      playername: '',
      platform: '',
      gameTitle: '',
      platformUserId: ''
    });
    console.log(this.state);
  }

  removePlayer(playerId) {
    const playerRef = firebase.database().ref(`/players/${playerId}`);
    playerRef.remove();
  }

  componentDidMount() {
    const playerRef = firebase.database().ref('players');
    playerRef.on('value', (snapshot) => {
      let players = snapshot.val();
      let newState = [];
      for (let player in players) {
        newState.push({
          id: player,
          playername: players[player].playerName,
          platform: players[player].platform,
          gameTitle: players[player].gameTitle,
          platformUserId: players[player].platformUserId,
          googleEmail: players[player].googleEmail
        })
      }
      console.log(newState);
      this.setState({
        players: newState
      });
      console.log(this.state);

    });

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    console.log(this.props.selectedGame);
    const work = this.props.state.selectedGame.gameTitle;
    const template = (this.props.state.user) ?

    <div className='formDiv'>
      <h2 className='h2'>Create a new player</h2>
      <div className='game-search'>
        <h3 className='h3'>Search for a game</h3>
        <GameSearch / >
      </div>
      <div className='game-select'>
        <h3 className='h3'>Select a game</h3>
        <GameList />
      </div>
      <div className='container'>
        <form className='form' onSubmit={this.handleSubmit}>
          <input id="playerName" type="text" name="playerName" placeholder="Name" value={this.props.playerName} onChange={this.handleChange} />


          <input id="platform" type="text" name="platform" placeholder="Platform" value={this.props.platform} onChange={this.handleChange} />


          <input id="gameTitle" type="text" name="gameTitle" value={this.props.state.selectedGame.gameTitle} readonly/>


          <input id="platformUserId" type="text" name="platformUserId" placeholder="Steam/XBOX/PS ID" value={this.props.platformUserId} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='player-div'>
        <section className='display-player'>
          <div className='wrapper'>
            <h2>Current Players</h2>
            <div className='your-profile'>
              <img src={this.state.user.photoURL}></img>
              <div>
                <h3>{this.state.user.displayName}</h3>
                <h4>{this.state.user.email}</h4>
              </div>
            </div>
            <ul>
              {this.state.players.map((player) => {
                return (
                  <li key={player.id}>
                    <h3>{player.playername}
                      {player.user === this.state.user.displayName || player.user === this.state.user.email ?
                        <button onClick={() => this.removePlayer(player.id)}>Remove Player</button> : null}
                        </h3>
                        <p><span className='bold'>Platform:</span> {player.platform}</p>
                        <p><span className='bold'>Game:</span> {player.gameTitle}</p>
                        <p><span className='bold'>Platform ID:</span> {player.platformUserId}</p>
                        {player.googleEmail === this.state.user.email ?
                  <button className='remove' onClick={() => this.removePlayer(player.id)}>Remove Player</button> : null}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </section>
      </div>

    </div> :  <div><h1 className='loginMessage'>Please log in.</h1></div>
  return(template);

    }

}




  const mapStateToProps = state => { //state.user is coming in as null from initialState
    // console.log(state.user);
    return {
      state: state
    };
  };


export default connect(mapStateToProps)(PlayerCreationForm);
