import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as action from 'action';

import * as api from '../api/homes';


function* getFirebase(payload) {
    
    try{
        const result = yield call(api.getFirebase);
        yield put(action.getFirebaseSuccess({
            items: result
        }))
    }catch (e) {
        
    }
}

function* watchGetFirebaseRequest() {
    yield takeEvery(action.Types.GET_FIREBASE_REQUEST, getFirebase)
}

const usersSagas = [
    fork(watchGetFirebaseRequest)
];

export default usersSagas;