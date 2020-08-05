import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import Selectors from './selectors';//selector

import { loginSaga, logoutSaga,correctSaga } from './login'
import postSaga from './post'
import userSaga from './user'
import { allowSaga } from './allow'
import { infoSaga, recordSaga } from './home'

import { LOGIN_START,LOGOUT_START,CORRECT_START } from '../actions/login';
import { INFO_START, RECORD_START } from '../actions/home';
import { ALLOW_START } from '../actions/allow';

import { GET_POSTS_START } from '../actions/posts';
import { GET_USERS_START } from '../actions/users';

// wacther saga
function* watchSaga() {
    yield takeEvery(LOGIN_START, loginSaga);
    yield takeEvery(LOGOUT_START, logoutSaga);
    yield takeEvery(CORRECT_START, correctSaga);

    yield takeEvery(INFO_START, infoSaga);
    yield takeEvery(RECORD_START, recordSaga);

    yield takeEvery(ALLOW_START, allowSaga);
    yield takeEvery(GET_POSTS_START, postSaga);
    yield takeEvery(GET_USERS_START, userSaga);
}

// root saga
export default function* rootSaga() {
    yield watchSaga()
}
