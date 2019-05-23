import { combineReducers } from 'redux'

import users from './users';
import posts from './posts';

//const appReducer = (() => combineReducers({ users, posts }))();

const appReducer = combineReducers({ users, posts });

export default appReducer

// ========================= 单独一个文件的写法 =============================
/* import {
    GET_USERS_SUCESS,
    GET_USERS_FAIL,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL
} from 'constant/actionTypes';

const initialState = {
	fetched: false,
	users: [{
		key: '1',
		name: '张三',
		email: 'zhangsan@126.com'
    }],
    posts: [{
        key: '1',
        id: '1',
        title: 'test'
    }],
	error: null
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_SUCESS:
            return {...state, fetched: true, users: action.users}
        case GET_USERS_FAIL:
            return {...state, error: action.error}
        case GET_POSTS_SUCCESS:
            return {...state, fetched: true, posts: action.posts}
        case GET_POSTS_FAIL:
            return {...state, error: action.error}
    }
    return state;
} */

//=======================combineReducers(reducers)======================
/*
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers)
  var finalReducers = {}

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i]
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }

  var finalReducerKeys = Object.keys(finalReducers)

  // 返回合成后的 reducer
  return function combination(state = {}, action) {
    var hasChanged = false
    var nextState = {}
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i]
      var reducer = finalReducers[key]
      var previousStateForKey = state[key]                       // 获取当前子 state
      var nextStateForKey = reducer(previousStateForKey, action) // 执行各子 reducer 中获取子 nextState
      nextState[key] = nextStateForKey                           // 将子 nextState 挂载到对应的键名
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    return hasChanged ? nextState : state //若state变化，返回nextState
  }
}
*/
