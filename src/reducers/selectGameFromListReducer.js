import constants from './../constants';
const { initialState, types } = constants;


const selectGameFromListReducer = (state = initialState.selectedGame, action) => {
  let selectedGame;
  let newSelectedGameStateSlice;
  switch (action.type) {
    case types.SELECT_GAME:
    const selectedGame = action.gameTitle;
    console.log(selectedGame);
    console.log(action.gameTitle);
    console.log(typeof(selectedGame));
    newSelectedGameStateSlice = Object.assign({}, state, {"gameTitle" : selectedGame});
    console.log(newSelectedGameStateSlice);
    return newSelectedGameStateSlice;
  default:
    return state;

  }
}

export default selectGameFromListReducer;
