import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL
} from '../actions';

const initState = {
    fetched: false,
    posts: [{
        key: '1',
        id: '1',
        title: 'test'
    }],
	  error: null
}
const postReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_POSTS_SUCCESS:
            return {...state, fetched: true, posts: action.posts}
        case GET_POSTS_FAIL:
            return {...state, error: action.error}
    }
    return state;
}


export default postReducer
