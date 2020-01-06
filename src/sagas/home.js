import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as action from 'action';
import database from 'config/utils/configureFirebase'
// import * as api from '../api/users';


function* getUsers(payload) {
    
    try{
        let result
        yield database.database().ref('upload').once('value', (snapshot) => {
            result = snapshot.val()
        })
        yield put(action.getUsersSuccess({
            items: result
        }))
    }catch (e) {
        
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(action.Types.GET_USERS_REQUEST, getUsers)
}

const usersSagas = [
    fork(watchGetUsersRequest)
];

export default usersSagas;