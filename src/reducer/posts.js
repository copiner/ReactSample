import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL
} from '../actions/posts';


const postReducer = (state = {loading:false,data:[],text:'posts',}, action) => {
    switch(action.type) {
        case GET_POSTS_SUCCESS:
            return {...state, fetched: true, data: action.posts}
        case GET_POSTS_FAIL:
            return {...state, error: action.error}
    }
    return state;
}


export default postReducer
