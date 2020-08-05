
// ================ action types ================

export const ALLOW_START = 'ALLOW_START';
export const ALLOW_SUCCESS = 'ALLOW_SUCCESS';
export const ALLOW_FAIL = 'ALLOW_FAIL';

export const ALLOW_CREATE_START = 'ALLOW_CREATE_START';
export const ALLOW_CREATE_SUCCESS = 'ALLOW_CREATE_SUCCESS';
export const ALLOW_CREATE_FAIL = 'ALLOW_CREATE_FAIL';

// ================ action creators ================

export function allowSt(alw) {
	return { type: ALLOW_START, list:alw }
}

export function allowSuc(alw) {
	return { type: ALLOW_SUCCESS, list:alw }
}
