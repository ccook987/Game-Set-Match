import constants from './../constants';
const { initialState, types } = constants;

const gameSelectionReducer = (state = initialState.gameById, action) => {
  let newGamesByIdEntry;
  let newGamesByIdStateSlice;
  switch (action.type) {
    case types.REQUEST_GAME:
      newGamesByIdEntry = {
        isFetching: true,
        name: action.name,
        id: action.id
      };
      newGamesByIdStateSlice = Object.assign({}, state, {
        [action.id]: newGamesByIdEntry
      });
      return newGamesByIdStateSlice

  default:
    return state;
  }
}


export default gameSelectionReducer;
