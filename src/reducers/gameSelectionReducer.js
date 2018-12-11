import constants from './../constants';
const { initialState, types } = constants;

const gameSelectionReducer = (state = initialState.gameById, action) => {
  let newGamesByIdEntry;
  let newGamesByIdStateSlice;
  switch (action.type) {
    case types.REQUEST_GAME:
      newGamesByIdEntry = {
        isFetching: true,
        title: action.title,
        id: action.id
      };
      newGamesByIdStateSlice = Object.assign({}, state, {
        [action.gameArray]: newGamesByIdEntry
      });
      return newGamesByIdStateSlice;

    case types.RECEIVE_GAMES:
      newGamesByIdEntry = Object.assign({}, state[action.id], {
        isFetching: false,
        title: action.title,
        id: action.id
      });
      newGamesByIdStateSlice = Object.assign({}, state, {
        [action.gameArray]: newGamesByIdEntry
      });
      return newGamesByIdStateSlice;

  default:
    return state;
  }
}


export default gameSelectionReducer;
