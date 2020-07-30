import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import Selectors from './selectors';//selector
import LoginServer from '../services/login';//selector

import {
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CORRECT_FAIL,
  CORRECT_SUCCESS
} from '../actions/login';

export function* loginSaga(data) {
    try {
        const rst = yield call(LoginServer.login);
        if(rst.name){
            yield put({ type: LOGIN_SUCCESS, login: rst });
        }
    } catch(e) {
        yield put({ type: LOGIN_FAIL, error: e });
    }
}

export function* logoutSaga(data) {
    try {
        const rst = yield call(LoginServer.login);
        if(rst.name){
            yield put({ type: LOGOUT_SUCCESS, login: rst });
        }
    } catch(e) {
        yield put({ type: LOGOUT_FAIL, error: e });
    }
}

export function* correctSaga(data) {
    try {
        const rst = yield call(LoginServer.login);
        if(rst.name){
            yield put({ type: CORRECT_SUCCESS, login: rst });
        }
    } catch(e) {
        yield put({ type: CORRECT_FAIL, error: e });
    }
}
