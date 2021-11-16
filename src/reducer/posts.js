import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL
} from '../actions/posts';


const postReducer = (state={lists:[]}, action) => {
    switch(action.type) {
        case GET_POSTS_SUCCESS:
            return {...state, lists: action.posts}
        case GET_POSTS_FAIL:
            return {...state, error: action.error}
    }
    return state;
}


export default postReducer
