import constants from './../constants';
const { initialState, types } = constants;


const selectGameFromListReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SELECT_GAME:
      return {
        selectedGame: action.gameId,
        id: action.gameId
      }
    default:
      return state;

  }
}

export default selectGameFromListReducer;
