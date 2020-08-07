import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import Selectors from './selectors';//selector
import TempleServer from '../services/temple';

import {
  TEMPLE_SUCESS,
  TEMPLE_FAIL
} from '../actions/temple';

export function* templeSaga() {
  try {
      //const kind = yield select(Selectors.getKind);
      const rst = yield call(TempleServer.fetchItem,'abc');
      //console.log(rst)
      yield put({ type: TEMPLE_SUCESS, temple: rst });//action kind
      //fork是无阻塞型调用，call是阻塞型调用
      //yield fork(getList);

      // const state = yield select();
      // console.log(state);
  } catch(e) {
      yield put({ type: TEMPLE_FAIL, error: e });
  }
}
