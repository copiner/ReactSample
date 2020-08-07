import {
  TEMPLE_START,
  TEMPLE_SUCESS,
  TEMPLE_FAIL
} from '../actions/temple';

const templeReducer = (state = { data:[], text:'temple',loading: false}, action) => {

    switch(action.type) {
        case TEMPLE_START:
            return {...state, loading: true}
        case TEMPLE_SUCESS:
            return {...state, loading: false, data: action.temple}
        case TEMPLE_FAIL:
            return {...state, loading: false, error: action.error}
    }
    return state;
};

export default templeReducer;
