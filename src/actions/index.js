import v4 from 'uuid/v4';
import * as types from './../constants/ActionTypes';


export const requestGame = (title, localGameId) => ({
  type: types.REQUEST_GAME,
  title,
  localGameId
});


export function fetchGameTitle(title) {
  return function (dispatch) {
    console.log('hi');
    const localGameId = v4();
    dispatch(requestGame(title, localGameId));
    title = title.replace(' ', '_');
    return fetch('https://api-endpoint.igdb.com/games/?search=' + title + 'fields=name&apikey=cc4faccf4bb21195945f3fc62d5e08fd')
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('Api results:', json)
    });
  };
}
