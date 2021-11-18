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

//redux-thunk
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

//reflect
export const listedDve = (dispatch,dve) =>{
	// dispatch(dvesrt())
	Deviceserver.fetchItem(dve).then((data)=>{
		dispatch(dvesuc(data))
	}).catch(e=>{
		dispatch(dvefil(e))
	})
}
