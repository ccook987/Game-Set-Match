import React from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';



class GameList extends React.Component {
  constructor(props, { state, dispatch }) {
    super(props, { state });
    this.handleChange = this.handleChange.bind(this);
  }

//  handleAddingGame(props, selectedGame, game) {
//   const {dispatch} = this.props;
//   console.log(props);
//   const action = {
//     type: types.SELECT_GAME,
//     name: props
//   };
//   console.log(selectedGame + 'selected game');
//   console.log(dispatch + 'dispatch');
//   console.log(this.props + 'props');
//
//   dispatch(action);
// }

  handleChange(e) {
    let newThingy = {};
    let gameTitle = e.target.value;
    let action = {
      type: types.SELECT_GAME,
      gameTitle
    }
console.log(action);
    // Object.assign({}, this.state);
    // console.log(this.state);
    this.props.dispatch(action);
     console.log(this.state);
   }



  render() {
    const { error, loading, gameArray } = this.props;
    console.log(gameArray);
    console.log(this.props.gameArray);
    if (error) {
      return <div>Error! {error.message}</div>
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    if(!loading) {
      return (
        <select onChange={this.handleChange}>
          {gameArray.gameArray.map(game =>
            <option onChange={() => {this.handleAddingGame(game.name)}} key={game.id}>{game.name}</option>
          )}
        </select>
      );

    }



  }
}

const mapStateToProps = state => ({
  gameArray: state.gameArray,
  loading: state.loading,
  error: state.error,
  selectedGame: state.selectedGame
});

export default connect(mapStateToProps)(GameList);
