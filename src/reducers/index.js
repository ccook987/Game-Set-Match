import { combineReducers } from 'redux';

import fetchGameResultsReducer from './fetchGameResultsReducer';
import selectGameFromListReducer from './selectGameFromListReducer';



const rootReducer = combineReducers({
  gameArray: fetchGameResultsReducer,
  selectedGame: selectGameFromListReducer
});


export default rootReducer;
