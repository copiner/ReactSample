import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import Selectors from './selectors';//selector
import KindServer from '../services/kind';

import {
  KIND_SUCESS,
  KIND_FAIL
} from '../actions/kind';

function* kindSaga() {
  try {
      //const kind = yield select(Selectors.getKind);
      const rst = yield call(KindServer.getGoods,'abc');
      yield put({ type: KIND_SUCESS, kind: rst.list });//action kind
      //fork是无阻塞型调用，call是阻塞型调用
      //yield fork(getList);

      // const state = yield select();
      // console.log(state);
  } catch(e) {
      yield put({ type: KIND_FAIL, error: e });
  }
}

export default kindSaga;
