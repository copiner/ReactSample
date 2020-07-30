import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import Selectors from './selectors';//selector
import UserServer from '../services/user';
import {
  GET_USERS_START,
  GET_USERS_SUCESS,
  GET_USERS_FAIL
} from '../actions/users';


function* userSaga() {
  try {
      //const users = yield select(Selectors.getUsers);
      const rst = yield call(UserServer.getGoods,'abc');
      yield put({ type: GET_USERS_SUCESS, users: rst.list });//action users
      //fork是无阻塞型调用，call是阻塞型调用
      //yield fork(getList);

      // const state = yield select();
      // console.log(state);
  } catch(e) {
      yield put({ type: GET_USERS_FAIL, error: e });
  }
}

export default userSaga;
