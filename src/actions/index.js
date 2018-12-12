import v4 from 'uuid/v4';
import * as types from './../constants/ActionTypes';
import firebase from 'firebase';
import firebaseConfig from '../constants/firebaseConfig.js';
import { FETCH_USER } from '../constants/ActionTypes';

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
export const authRef = firebase.auth();
const databaseRef = firebase.database().ref();
export const playerRef = databaseRef.child("players");


export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
  .signOut()
  .then(() => {
    //sign-outscuees
  })
  .catch(error => {
    console.log(error);
  });
};

// export const signIn = (user) => ({
//   type: types.LOGIN_USER,
//   user
// });
//
// export function loginUsers() {
//   return function (dispatch) {
//     auth.signInWithPopup(provider)
//       .then((result) => {
//         const user = result;  ////user is my google account info
//         dispatch(signIn(user));
//       });
//   }
// }
//
// export const logoutUser = (user) => ({
//   type: types.LOGOUT_USER,
//   user: null
// });
//
// export function logoutUsers() {
//   return function (dispatch) {
//     auth.signOut()
//       .then(() => {
//         dispatch(logoutUser());
//       });
//   }
// }


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
