import {
    INFO_SUCCESS,
    INFO_FAIL,
    RECORD_SUCCESS,
    RECORD_FAIL
} from '../actions/home';


const homeReducer = (state = {loading:false,data:[],text:'home',}, action) => {
    switch(action.type) {
        case INFO_SUCCESS:
            return {...state, fetched: true, data: action.data}
        case INFO_FAIL:
            return {...state, error: action.error}
        case RECORD_SUCCESS:
            return {...state, fetched: true, data: action.data}
        case RECORD_FAIL:
            return {...state, error: action.error}
    }
    return state;
}


export default homeReducer
