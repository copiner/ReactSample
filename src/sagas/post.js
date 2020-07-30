import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import Selectors from './selectors';//selector
import PostServer from '../services/post';
import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL
} from '../actions/posts';


function* postSaga() {
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

export default postSaga;
