import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/slice'; 
import useDetailsReducer from './userDetails/slice'

const rootReducer = combineReducers({
  userReducer,
  useDetailsReducer

});

export default rootReducer;
