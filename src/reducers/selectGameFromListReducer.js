import constants from './../constants';
const { initialState, types } = constants;


const selectGameFromListReducer = (state = initialState.selectedGame, action) => {
  let selectedGame;
  let newSelectedGameStateSlice;
  switch (action.type) {
    case types.SELECT_GAME:
    const selectedGame = action.name;
    console.log(selectedGame);
    newSelectedGameStateSlice = Object.assign({selectedGame}, state);
    console.log(newSelectedGameStateSlice);
    return newSelectedGameStateSlice;
  default:
    return state;

  }
}

export default selectGameFromListReducer;
