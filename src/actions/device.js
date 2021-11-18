import Deviceserver from "../services/device"

export const DEVICE_START = 'DEVICE_START';
export const DEVICE_SUCESS = 'DEVICE_SUCESS';
export const DEVICE_FAIL = 'DEVICE_FAIL';

// ================ action creators ================
export function dvesrt() {
  return { type: DEVICE_SUCESS }
}
export function dvesuc(data) {
  return { type: DEVICE_SUCESS, dva:data }
}
export function dvefil(e) {
  return { type: DEVICE_FAIL, error:e }
}


//reflect
export const listedDve = (dispatch,dve) =>{
	// dispatch(dvesrt())
	Deviceserver.fetchItem(dve).then((data)=>{
		dispatch(dvesuc(data))
	}).catch(e=>{
		dispatch(dvefil(e))
	})
}

//redux-thunk
//we call it thunk action creators
/*
If Redux Thunk middleware is enabled,
any time you attempt to dispatch a function
instead of an action object,
the middleware will call that
function with dispatch method itself
as the first argument.

However, the point of extracting an action creator
was to centralize this repetitive logic
across many components. Fortunately,
Redux Thunk offers you a way to
read the current state of the Redux store.
In addition to dispatch,
it also passes getState as the second argument
to the function you return from your thunk action creator.
This lets the thunk read the current state of the store
*/
export const listDve = (dve) =>{
	return (dispatch, getState)=>{
		//const tt = getState();
		// dispatch(dvesrt())
		Deviceserver.fetchItem(dve).then((data)=>{
			dispatch(dvesuc(data))
		}).catch(e=>{
			dispatch(dvefil(e))
		})
	}
}

//Don’t sweat it unless you know why you’re doing this.
