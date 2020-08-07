import {
  KIND_START,
  KIND_SUCESS,
  KIND_FAIL
} from '../actions/kind';

const kindReducer = (state = {data:[], text:'kind',loading: false}, action) => {

    switch(action.type) {
        case KIND_START:
            return {...state, loading: true}
        case KIND_SUCESS:
            return {...state, loading: false, data: action.kind}
        case KIND_FAIL:
            return {...state, loading: false, error: action.error}
    }
    return state;
};

export default kindReducer;
