// ================ action types ================

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const CORRECT_MID = 'CORRECT_MID';
export const CORRECT_START = 'CORRECT_START';
export const CORRECT_SUCCESS = 'CORRECT_SUCCESS';
export const CORRECT_FAIL = 'CORRECT_FAIL';

// ================ action creators ================

export function loginIn(login) {
	return { type: LOGIN_SUCCESS, login:login }
}

export function loginSt(login) {
	return { type: LOGIN_START, login:login }
}

export function logoutIn(login) {
	return { type: LOGOUT_SUCCESS, login:login }
}

export function logoutSt(login) {
	return { type: LOGOUT_START, login:login }
}

export function correctMid() {
	return { type: CORRECT_MID }
}

export function correctIn(login) {
	return { type: CORRECT_SUCCESS, login:login }
}

export function correctSt(login) {
	return { type: CORRECT_START, login:login }
}
