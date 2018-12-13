import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { auth, googleAuthProvider } from '../actions';


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
    const playerRef = firebase.database().ref('players');
    const player = {
      playerName: this.state.playerName,
      platform: this.state.platform,
      gameTitle: this.state.gameTitle,
      platformUserId: this.state.platformUserId,
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
          platformUserId: players[player].platformUserId
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
    const template = (this.props.state.user) ?
    <div>
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <input id="playerName" type="text" name="playerName" placeholder="Name" value={this.props.playerName} onChange={this.handleChange} />
          <input id="platform" type="text" name="platform" placeholder="Platform" value={this.props.platform} onChange={this.handleChange} />
          <input id="gameTitle" type="text" name="gameTitle" placeholder="Game" value={this.props.gameTitle} onChange={this.handleChange} />
          <input id="platformUserId" type="text" name="platformUserId" placeholder="Steam/XBOX/PS ID" value={this.props.platformUserId} onChange={this.handleChange} />
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
                    {player.user === this.state.user.displayName || player.user === this.state.user.email ?
                      <button onClick={() => this.removePlayer(player.id)}>Remove Player</button> : null}
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

      </div> :  <div><h1>Please Login!</h1></div>
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
