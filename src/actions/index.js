import v4 from 'uuid/v4';
import * as types from './../constants/ActionTypes';

export const fetchGamesBegin = (title, id) => ({
  type: types.FETCH_GAMES_BEGIN,
  title,
  id
});

export const fetchGamesSuccess = games => ({
  type: types.FETCH_GAMES_SUCCESS,
  payload: { games }
});

export const fetchGamesFailure = error => ({
  type: types.FETCH_GAMES_FAILURE,
  payload: { error }
});

export const selectGame = game =>
({
  type: types.SELECT_GAME,
  game
});

export function fetchSelectedGame(game) {
  return game
}


const API_KEY = process.env.REACT_APP_VIDEO_GAME_API_KEY;

export function fetchGameTitle(title) {
  return dispatch => {
    const localGameId = v4();
    dispatch(fetchGamesBegin(title));
    title = title.replace(' ', '_');
    return fetch('https://api-endpoint.igdb.com/games/?search=' + title + '&fields=name&limit=20', {
      headers : {
        'Accept': 'application/json',
        'user-key': API_KEY
       }

    })
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(json => {
      console.log('Api results:', json)
      dispatch(fetchGamesSuccess(json));
      console.log(json);
      return json
    })
    .catch(error => dispatch(fetchGamesFailure(error)));
  };
}
