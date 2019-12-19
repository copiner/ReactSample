import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import { get, post } from '../api';

import { GET_POSTS_START,GET_POSTS_SUCCESS,GET_POSTS_FAIL } from '../actions';

import { GET_COMMENTS_START,GET_COMMENTS_SUCCESS,GET_COMMENTS_FAIL,
    GET_USERS_START,GET_USERS_SUCESS,GET_USERS_FAIL
} from '../actions/comments';

import { GET_POSTS_URL,GET_USERS_URL,GET_COMMENTS_URL } from '../api/url';

import { getUsers, getPosts } from './selectors';
// worker saga
function* showPostsAsync() {
    try {
        //const posts = yield select(getPosts);
        //console.log(posts);
        let user = {userId:2, name:"wrq"};
        const res = yield call(post, GET_POSTS_URL, user);
        yield put({ type: GET_POSTS_SUCCESS, posts: res.data });
        // const state = yield select();
        // console.log(state);
    } catch(e) {
        yield put({ type: GET_POSTS_FAIL, error: e });
    }
}

function* showCommentsAsync() {
    try {
        const res = yield call(get, GET_COMMENTS_URL);
        yield put({ type: GET_COMMENTS_SUCCESS, comments: res.data });
        const state = yield select();
        console.log(state);
        //fork 是无阻塞型调用，call 是阻塞型调用
        //yield fork(getList);
    } catch(e) {
        yield put({ type: GET_COMMENTS_FAIL, error: e });
    }
}

function* showUsersAsync() {
    try {
        //const users = yield select(getUsers);
        const res = yield call(get, GET_USERS_URL);
        yield put({ type: GET_USERS_SUCESS, users: res.data });
        //fork 是无阻塞型调用，call 是阻塞型调用
        //yield fork(getList);
    } catch(e) {
        yield put({ type: GET_USERS_FAIL, error: e });
    }
}

// wacther saga
function* watchGetPosts() {
    yield takeEvery(GET_POSTS_START, showPostsAsync);
    yield takeEvery(GET_USERS_START, showUsersAsync);
    yield takeEvery(GET_COMMENTS_START, showCommentsAsync);
    //===
    // yield take(GET_POSTS_START);
    // yield fork(showPostsAsync);
}

// root saga
export default function* rootSaga() {
    yield watchGetPosts()
}
