
// ================ action types ================

export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';


// ================ action creators ================

export function getPosts(posts) {
	return { type: GET_POSTS_START, posts }
}
