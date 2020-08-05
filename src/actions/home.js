
// ================ action types ================

export const INFO_START = 'INFO_START';
export const INFO_SUCCESS = 'INFO_SUCCESS';
export const INFO_FAIL = 'INFO_FAIL';


export const RECORD_START = 'RECORD_START';
export const RECORD_SUCCESS = 'RECORD_SUCCESS';
export const RECORD_FAIL = 'RECORD_FAIL';

// ================ action creators ================

export function infoSt(alw) {
	return { type: INFO_START, data:alw }
}

export function infoSuc(alw) {
	return { type: INFO_SUCCESS, data:alw }
}

export function recordSt(alw) {
	return { type: RECORD_START, data:alw }
}

export function recordSuc(alw) {
	return { type: RECORD_SUCCESS, data:alw }
}
