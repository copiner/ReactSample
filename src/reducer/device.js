import {
  DEVICE_START,
  DEVICE_SUCESS,
  DEVICE_FAIL
} from '../actions/device';

const deviceReducer = (state = { data:[], text:'device',loading: false}, action) => {

    switch(action.type) {
        case DEVICE_START:
            return {...state, loading: true}
        case DEVICE_SUCESS:
            return {...state, loading: false, data: action.device}
        case DEVICE_FAIL:
            return {...state, loading: false, error: action.error}
    }
    return state;
};

export default deviceReducer;
