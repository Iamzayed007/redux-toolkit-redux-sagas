import { takeLatest, put, all, fork, takeEvery, call } from 'redux-saga/effects';
import {getUsers,getUsersSuccess,getUsersError} from './slice'; // Import your slice actions

const  getUsersAsync =async(payload) =>{
    try {
        console.log(1);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        // console.log('returnedData', data);
        return{
            users: data
        }
    } catch (error) {
        
    }
}
function* getUserData({payload}) {
  try {
    console.log(2);
    const returnedData = yield call(getUsersAsync, payload);
    // const response = yield fetch('https://jsonplaceholder.typicode.com/users');
    // const data = yield response.json();
    // console.log('returnedData', data);
    console.log(returnedData.users);
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
