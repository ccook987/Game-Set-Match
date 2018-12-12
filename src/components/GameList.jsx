import React from "react";
import { connect } from "react-redux";
import { fetchSelectedGame } from './../actions';


class GameList extends React.Component {

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
            <li key={game.id}>{game.name}</li>
          )}
        </ul>
      );

    }



  }
}

const mapStateToProps = state => ({
  gameArray: state.gameArray,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(GameList);
