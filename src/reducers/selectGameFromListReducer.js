import constants from './../constants';
const { initialState, types } = constants;


const selectGameFromListReducer = (state = initialState, action) => {
  switch (action.type) {
    // case types.SELECT_GAME:
    //
    // return {
    //   selectedGame: state.player.gameTitle
    // }


    default:
    return state;

  }
}

export default selectGameFromListReducer;
