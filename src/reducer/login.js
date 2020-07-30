import {
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CORRECT_FAIL,
    CORRECT_MID,
    CORRECT_SUCCESS
} from '../actions/login';

const loginReducer = (state = {status:false,correct:false,data:{}}, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state, status:true, data: action.login}
        case LOGIN_FAIL:
            return {...state, error: action.error}
        case LOGOUT_SUCCESS:
            return {...state, status:false, data: action.login}
        case LOGOUT_FAIL:
            return {...state, error: action.error}
        case CORRECT_MID:
            return {...state, correct:true}
        case CORRECT_SUCCESS:
            return {...state, status:false, correct:false, data: action.login}
        case CORRECT_FAIL:
            return {...state, error: action.error}
    }
    return state;
}


export default loginReducer
