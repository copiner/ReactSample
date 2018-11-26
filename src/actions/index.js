//import { get } from '../api';
//import { GET_USERS_URL } from '../api/url';

// ================ action types ================

export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';


// ================ action creators ================

export function getPosts(posts) {
	return { type: GET_POSTS_START, posts }
}




//redux-thunk
// export function getUsers(data, id) {
//
// 	return function (dispatch, getState) {
// 			// dispatch({ type: QUERY_BALANCE, data, id })
// 			const current = getState();
// 			console.log(current);
//
// 			get(GET_USERS_URL)
// 					.then((res) => {
// 							dispatch({ type: GET_USERS_SUCESS, users: res.data })
// 					})
// 					.catch((error) => {
// 							dispatch({ type: GET_USERS_FAIL, error })
// 					})
//
// 	}
//
// }
