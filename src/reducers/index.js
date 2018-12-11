import userLoginReducer from './userLoginReducer';
import gameSelectionReducer from './gameSelectionReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  gameById: gameSelectionReducer,
  user: userLoginReducer
});

export default rootReducer;
