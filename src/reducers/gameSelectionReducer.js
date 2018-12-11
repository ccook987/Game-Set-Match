import constants from './../constants';
const { initialState, types } = constants;

const gameSelectionReducer = (state = initialState, action) => {
  switch (action.type) {

    // Mark the state as "loading" so we can show a spinner or something
    // Also, reset any errors. We're starting fresh.
    case types.FETCH_GAMES_BEGIN:
      return {
        state,
        loading: true,
        error: null
      };

      // All done: set loading "false".
      // Also, replace the games with the ones from the server
    case types.FETCH_GAMES_SUCCESS:
      return {
        state,
        loading: false,
        gameArray: action.payload.games
      };

      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have items to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the items
      // around! Do whatever seems right.
    case types.FETCH_GAMES_FAILURE:
    return {
      state,
      loading: false,
      error: action.payload.error,
      gameArray: []
    };


// ALWAYS have a default case in a reducer
  default:
    return state;
  }
}


export default gameSelectionReducer;
