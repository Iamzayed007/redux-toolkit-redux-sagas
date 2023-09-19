import { takeLatest, put, all, fork, takeEvery, call } from 'redux-saga/effects';
import {getUsers,getUsersSuccess,getUsersError} from './slice'; // Import your slice actions

const  getUsersAsync =async(payload) =>{
    try {
        console.log(1);
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();

        return{
            users: data
        }
    } catch (error) {
        
    }
}
function* getUserData({payload}) {
  try {

    const returnedData = yield call(getUsersAsync, payload);

    if (returnedData.users) {
        
        yield put(getUsersSuccess(returnedData.users));
    }
  } catch (error) {
    // Handle errors
    yield put(getUsersError(error));
  }
}
export function* watchGetUsers() {
    yield takeEvery(getUsers.type, getUserData);
  }
export default function* rootSaga() {
  yield all([
    fork(watchGetUsers)
  ]);
}
