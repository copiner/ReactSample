import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import Selectors from './selectors';//selector

import PostServer from '../services/post';//selector
import UserServer from '../services/user';//selector


import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL
} from '../actions/posts';

import {
  GET_USERS_START,
  GET_USERS_SUCESS,
  GET_USERS_FAIL
} from '../actions/users';

// worker saga
function* showPostsAsync() {
    try {
        const posts = yield select(Selectors.getPosts);
        // console.log(posts)
        let user = {userId:2, name:"wrq"};
        const rst = yield call(PostServer.getPosts, user);

        yield put({ type: GET_POSTS_SUCCESS, posts: rst.list });

    } catch(e) {
        yield put({ type: GET_POSTS_FAIL, error: e });
    }
}


function* showUsersAsync() {
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

// wacther saga
function* watchGetPosts() {
    yield takeEvery(GET_POSTS_START, showPostsAsync);
    yield takeEvery(GET_USERS_START, showUsersAsync);
    /*
    ===
    yield take(GET_POSTS_START);
    yield fork(showPostsAsync);
    */
}

// root saga
export default function* rootSaga() {
    yield watchGetPosts()
}
