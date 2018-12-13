import React from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';



class GameList extends React.Component {

 handleAddingGame(props, selectedGame, gameId) {
  const {dispatch} = this.props;
  const action = {
    type: types.SELECT_GAME,
    gameId: gameId
  };
  console.log(selectedGame + 'selected game');
  console.log(dispatch + 'dispatch');
  console.log(this.props + 'props');

  dispatch(action);
}



  render() {
    const { error, loading, gameArray } = this.props;

    console.log(gameArray.gameArray);
    if (error) {
      return <div>Error! {error.message}</div>
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    if(loading !==true) {
      return (
        <ul>
          {gameArray.gameArray.map(game =>
            <li onClick={() => {this.handleAddingGame(this.props.gameId)}} key={game.id}>{game.name}</li>
          )}
        </ul>
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
