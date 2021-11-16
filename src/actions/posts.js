import Postserver from "../services/post"
// ================ action types ================

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';


// ================ action creators ================

export function postsuc(data) {
  return { type: GET_POSTS_SUCCESS, posts:data }
}
export function postfil(data) {
  return { type: GET_POSTS_FAIL, posts:data }
}

export const listPosts = (posts) =>{
	return (dispatch, getState)=>{
		const tt = getState();
		console.log(posts)
		Postserver.getPosts(posts).then((data)=>{
			dispatch(postsuc(data))
		}).catch(e=>{
			console.log(e)
		})
	}
}
