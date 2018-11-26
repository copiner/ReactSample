export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCESS = 'GET_USERS_SUCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const GET_COMMENTS_START = 'GET_COMMENTS_START';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL';

// ================ action creators ================
export function getUsers(users) {
	return { type: GET_USERS_START, users }
}

export function getComments(comments) {
	return { type: GET_COMMENTS_START, comments }
}
