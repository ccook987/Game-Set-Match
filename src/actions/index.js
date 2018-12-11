import v4 from 'uuid/v4';
import * as types from './../constants/ActionTypes';
import firebase from 'firebase';
import firebaseConfig from '../constants/firebaseConfig.js';

// export const createPlayer = (players) => ({
//   type: types.CREATE_PLAYER,
//   players
// });
//
// export function createPlayers(players) {
//   return function (dispatch) {
//     dispatch(createPlayer(players));
//     return fetch('https://game-set-match-eb9cb.firebaseio.com')
//   }
// }

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();


export const loginUser = (user) => ({
  type: types.LOGIN_USER,
  user
});

export function loginUsers() {
  return function (dispatch) {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result;
        dispatch(loginUser(user));
      });
  }
}

export const requestGame = (title, localGameId) => ({
  type: types.REQUEST_GAME,
  title,
  localGameId
});

const API_KEY = process.env.VIDEO_GAME_API_KEY;

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
