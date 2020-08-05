import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import Selectors from './selectors';//selector
import HomeServer from '../services/home';

import {
  INFO_SUCCESS,
  INFO_FAIL,
  RECORD_SUCCESS,
  RECORD_FAIL
} from '../actions/home';

export function* infoSaga(data) {
    try {
        const rst = yield call(HomeServer.custInfo, data);
        console.log(rst)
        if(rst){
            yield put({ type: INFO_SUCCESS, data: rst });
        }
    } catch(e) {
        yield put({ type: INFO_FAIL, error: e });
    }
}

export function* recordSaga(record) {
    try {
        console.log(record.data)
        const rst = yield call(HomeServer.custRecord, record.data);
        //console.log(rst)
        if(rst){
            yield put({ type: INFO_SUCCESS, data: rst });
        }
    } catch(e) {
        yield put({ type: INFO_FAIL, error: e });
    }
}
