import {GET_USERS_START,GET_USERS_SUCESS,GET_USERS_FAIL,
        GET_COMMENTS_START, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAIL
} from '../actions/comments';

const userReducer = (state = {
    fetched: false,
    users: [{
        id:"1",
        key: '1',
        name: '张三',
        email: 'zhangsan@126.com'
    }],
    error: null
}, action) => {
    switch(action.type) {
        case GET_USERS_START:
            return {...state, fetched: true, text: action.users}
        case GET_USERS_SUCESS:
            return {...state, fetched: true, users: action.users}
        case GET_USERS_FAIL:
            return {...state, error: action.error}
        case GET_COMMENTS_START:
            return {...state, fetched: true, text: action.comments}
        case GET_COMMENTS_SUCCESS:
            return {...state, fetched: true, comments: action.comments}
        case GET_COMMENTS_FAIL:
            return {...state, error: action.error}
    }
    return state;
};

export default userReducer;


// switch (action.type) {
//    case ADD_TODO:
//      return [
//        {
//          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
//          completed: false,
//          text: action.text
//        },
//        ...state
//      ]
//
//    case DELETE_TODO:
//      return state.filter(todo =>
//        todo.id !== action.id
//      )
//
//    case EDIT_TODO:
//      return state.map(todo =>
//        todo.id === action.id ?
//          { ...todo, text: action.text } :
//          todo
//      )
//
//    case COMPLETE_TODO:
//      return state.map(todo =>
//        todo.id === action.id ?
//          { ...todo, completed: !todo.completed } :
//          todo
//      )
//
//    case COMPLETE_ALL:
//      const areAllMarked = state.every(todo => todo.completed)   //state = initialState数组
//      return state.map(todo => ({
//        ...todo,
//        completed: !areAllMarked   //覆盖之前的completed值
//      }))
//
//    case CLEAR_COMPLETED:
//      return state.filter(todo => todo.completed === false)
//
//    default:
//      return state
//  }
