import v4 from 'uuid/v4';
import * as types from './../constants/ActionTypes';


export const requestGame = (title, localGameId) => ({
  type: types.REQUEST_GAME,
  title,
  localGameId
});

export const receiveGames = (title, id) => ({
  type: types.RECEIVE_GAMES,
  title,
  id
})

const API_KEY = process.env.REACT_APP_VIDEO_GAME_API_KEY;

export function fetchGameTitle(title) {
  return function (dispatch) {
    console.log('hi');
    const localGameId = v4();
    dispatch(requestGame(title, localGameId));
    title = title.replace(' ', '_');
    return fetch('https://api-endpoint.igdb.com/games/?search=' + title + '&fields=name', {
      headers : {
        'Accept': 'application/json',
        'user-key': API_KEY
       }

    })
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('Api results:', json)
    });
  };
}
