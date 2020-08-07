import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';

import { loginSaga, logoutSaga,correctSaga } from './login'
import postSaga from './post'
import kindSaga from './kind'
import { allowSaga } from './allow'
import { infoSaga, recordSaga } from './home'

import { templeSaga } from './temple'
import { deviceSaga } from './device'

import { LOGIN_START, LOGOUT_START, CORRECT_START } from '../actions/login';
import { INFO_START, RECORD_START } from '../actions/home';
import { ALLOW_START } from '../actions/allow';

import { GET_POSTS_START } from '../actions/posts';
import { KIND_START } from '../actions/kind';
import { TEMPLE_START } from '../actions/temple';

import { DEVICE_START } from '../actions/device';
// wacther saga
function* watchSaga() {
    yield takeEvery(LOGIN_START, loginSaga);
    yield takeEvery(LOGOUT_START, logoutSaga);
    yield takeEvery(CORRECT_START, correctSaga);

    yield takeEvery(INFO_START, infoSaga);
    yield takeEvery(RECORD_START, recordSaga);

    yield takeEvery(ALLOW_START, allowSaga);
    yield takeEvery(GET_POSTS_START, postSaga);
    yield takeEvery(KIND_START, kindSaga);

    yield takeEvery(TEMPLE_START, templeSaga);
    yield takeEvery(DEVICE_START, deviceSaga);
}

// root saga
export default function* rootSaga() {
    yield watchSaga()
}
