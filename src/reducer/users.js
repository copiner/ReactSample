import {
  GET_USERS_START,
  GET_USERS_SUCESS,
  GET_USERS_FAIL
} from '../actions/users';

const userReducer = (state = {data:[], text:'users',loading: false}, action) => {

    switch(action.type) {
        case GET_USERS_START:
            return {...state, loading: true, text: action.users}
        case GET_USERS_SUCESS:
            return {...state, loading: false, data: action.users}
        case GET_USERS_FAIL:
            return {...state, loading: false, error: action.error}
    }
    return state;
};

export default userReducer;
