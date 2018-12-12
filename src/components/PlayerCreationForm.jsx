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
      platformUserId: this.state.platformUserId
      // user: this.state.user.displayName || this.state.user.email
    }
    playerRef.push(player);
    this.setState({
      playername: '',
      platform: '',
      gameTitle: '',
      platformUserId: ''
    });
    console.log(player);
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
      this.setState({
        players: newState
      });
    });

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return(
      <div>
        <h2>Bo</h2>
      </div>
    )
  }
}


  const mapStateToProps = state => { //state.user is coming in as null from initialState
    // console.log(state.user);
    return {
      state: state
    };
  };


export default connect(mapStateToProps)(PlayerCreationForm);
