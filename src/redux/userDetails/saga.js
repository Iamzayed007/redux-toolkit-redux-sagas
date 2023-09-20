import { takeLatest, put, all, fork, takeEvery, call } from 'redux-saga/effects';
import { getUser,getUserSuccess,getUserError} from './slice'; // Import your slice actions

const  getUserAsync =async(payload) =>{
    try {
        console.log(payload);
        const response = await fetch(`https://dummyjson.com/users/${payload}`);
        const data = await response.json();

        return{
            user: data
        }
    } catch (error) {
        
    }
}
function* getUserData({payload}) {
  try {

    const returnedData = yield call(getUserAsync, payload);

    if (returnedData.user) {
        
        yield put(getUserSuccess(returnedData.user));
    }
  } catch (error) {
    // Handle errors
    yield put(getUserError(error));
  }
}
export function* watchgetUser() {
    yield takeEvery(getUser.type, getUserData);
  }
export default function* rootSaga() {
  yield all([
    fork(watchgetUser)
  ]);
}
