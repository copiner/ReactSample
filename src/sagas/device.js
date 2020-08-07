import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import Selectors from './selectors';//selector
import DeviceServer from '../services/device';

import {
  DEVICE_SUCESS,
  DEVICE_FAIL
} from '../actions/device';

export function* deviceSaga() {
  try {
      //const kind = yield select(Selectors.getKind);
      const rst = yield call(DeviceServer.fetchItem,'abc');
      //console.log(rst)
      yield put({ type: DEVICE_SUCESS, device: rst });//action kind
      //fork是无阻塞型调用，call是阻塞型调用
      //yield fork(getList);

      // const state = yield select();
      // console.log(state);
  } catch(e) {
      yield put({ type: DEVICE_FAIL, error: e });
  }
}
