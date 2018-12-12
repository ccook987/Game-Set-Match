import { combineReducers } from 'redux';

import fetchGameResultsReducer from './fetchGameResultsReducer';
import selectGameFromListReducer from './selectGameFromListReducer';
import getLoggedInUserReducer from './getLoggedInUserReducer';


const rootReducer = combineReducers({
  gameArray: fetchGameResultsReducer,
  player: selectGameFromListReducer,
  user: getLoggedInUserReducer
});


export default rootReducer;
