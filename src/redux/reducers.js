import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/slice'; // Create your own slice

const rootReducer = combineReducers({
  userReducer,
  // Add other reducers here if needed
});

export default rootReducer;
