import React from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';



class GameList extends React.Component {

 handleAddingGame(props, selectedGame, game) {
  const {dispatch} = this.props;
  console.log(props);
  const action = {
    type: types.SELECT_GAME,
    name: props
  };
  console.log(selectedGame + 'selected game');
  console.log(dispatch + 'dispatch');
  console.log(this.props + 'props');

  dispatch(action);
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
        <ul>
          {gameArray.gameArray.map(game =>
            <li onClick={() => {this.handleAddingGame(game.name)}} key={game.id}>{game.name}</li>
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
