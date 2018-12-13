import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import getLoggedInUserReducer from './reducers/getLoggedInUserReducer';
import { HashRouter } from 'react-router-dom';



const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
