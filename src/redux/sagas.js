// rootSaga.js
import { all } from 'redux-saga/effects';
import userSaga from './user/saga';
import userDetailsSaga from './userDetails/saga';


function* rootSaga() {
  yield all([
    userSaga(),
    userDetailsSaga()
  
  ]);
}

export default rootSaga;
