import {
    ALLOW_SUCCESS,
    ALLOW_FAIL
} from '../actions/allow';


const allowReducer = (state = {loading:false,data:[],text:'allow',}, action) => {
    switch(action.type) {
        case ALLOW_SUCCESS:
            return {...state, fetched: true, data: action.list}
        case ALLOW_FAIL:
            return {...state, error: action.error}
    }
    return state;
}


export default allowReducer
