import constants from './../constants';
const { initialState, types } = constants;

const playerCreationReducer = (state = initialState.players, action) => {
  let newPlayer;
  let newPlayerStateSlice;
  switch (action.type) {
    case types.CREATE_PLAYER:
      newPlayer = {
        isFetching: true,
        name: action.name,
        id: action.id
      };
      newPlayerStateSlice = Object.assign({}, state, {
        [action.id]: newPlayer
      });
      return newPlayerStateSlice;

  default:
    return state;
  }
}

export default playerCreationReducer;
