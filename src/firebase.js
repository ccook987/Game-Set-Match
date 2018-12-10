import firebase from 'firebase';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "game-set-match-eb9cb.firebaseapp.com",
  databaseURL: "https://game-set-match-eb9cb.firebaseio.com",
  projectId: "game-set-match-eb9cb",
  storageBucket: "game-set-match-eb9cb.appspot.com",
  messagingSenderId: "245647734591"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
