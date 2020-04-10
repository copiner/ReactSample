import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


import User from '../component/UserList';

// import {
//     GET_USERS_SUCESS,
//     GET_USERS_FAIL
// } from '../actions';

import * as ucCreators from '../actions/comments.js'
import {
    GET_USERS_URL
} from '../api/url';

const mapStateToProps  = (state) => ({
     // users: state.users   // 合并的reducer
     users: state.users.users    // 单独的reducer
});

const mapDispatchToProps = (dispatch) => ({
    fetchUC: bindActionCreators(ucCreators, dispatch)
});

//or
// import axios from 'axios'
// const mapDispatchToProps = (dispatch) => ({
//     fetchUsers: () => {
//         dispatch(() => {
//             axios.get(GET_USERS_URL)
//                 .then((response) => {
//                     dispatch({ type: GET_USERS_SUCESS, users: response.data })
//                 })
//                 .catch((error) => {
//                     dispatch({ type: GET_USERS_FAIL, error })
//                 })
//         })
//     }
// });

export default connect(mapStateToProps, mapDispatchToProps)(User);


//bindActionCreators(actionCreators, dispatch)
/*
function bindActionCreator(actionCreator, dispatch) {
  return (...args) => dispatch(actionCreator(...args))
}

export default function bindActionCreators(actionCreators, dispatch) {
  // 省去一些类型判断
  var keys = Object.keys(actionCreators)
  var boundActionCreators = {}
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    var actionCreator = actionCreators[key]
    if (typeof actionCreator === 'function') {
      // 逐个装上自动 dispatch 技能
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }
  return boundActionCreators
}
*/
