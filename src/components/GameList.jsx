import React from "react";
import { connect } from "react-redux";


class GameList extends React.Component {

  render() {
    const { error, loading, gameArray } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>
    }
    if (loading) {
      return <div>Loading...</div>;
    }


    return (
      <ul>
        {gameArray.map(game =>
          <li key={game.id}>{game.name}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  gameArray: state.gameArray,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(GameList);
