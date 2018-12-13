import v4 from 'uuid/v4';
import * as types from './../constants/ActionTypes';
/* eslint-disable */
const firebase = require('firebase/app');
require('firebase/auth');
import FirebaseAuth from 'react-firebaseui';
import constants from './../../src/constants';
const { c } = constants;
let { firebaseConfig } = constants;


firebase.initializeApp(firebaseConfig);
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth()
/* eslint-enable */

export function newUserLogin() {
  return function (dispatch) {
    auth.signInWithPopup(googleAuthProvider).then(result => {
      // const token = result.credential.accessToken;
      const user = result.user;
      dispatch(userLogin(result.user));
    })
  }
}

export const userLogin = (user) => {
return ({
  type: types.USER_LOGIN,
  user
});
}

export function newUserLogout() {
  return function (dispatch) {
    auth.signOut().then(result => {
      dispatch(userLogout());
    });
  }
}

export const userLogout = (user = null) => ({
  type: types.USER_LOGOUT,
  user: null,
})


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
