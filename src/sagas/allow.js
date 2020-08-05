import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import Selectors from './selectors';//selector
import AllowServer from '../services/allow';

import {
  ALLOW_SUCCESS,
  ALLOW_FAIL
} from '../actions/allow';

export function* allowSaga(data) {
    try {
        const rst = yield call(AllowServer.allowList, data);
        console.log(rst)
        if(rst){
            yield put({ type: ALLOW_SUCCESS, list: rst });
        }
    } catch(e) {
        yield put({ type: ALLOW_FAIL, error: e });
    }
}
