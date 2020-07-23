export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCESS = 'GET_USERS_SUCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

// ================ action creators ================

export function getUsers(users) {
	return { type: GET_USERS_START, users:users }
}
