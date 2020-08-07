export const DEVICE_START = 'DEVICE_START';
export const DEVICE_SUCESS = 'DEVICE_SUCESS';
export const DEVICE_FAIL = 'DEVICE_FAIL';

// ================ action creators ================

export function deviceSt(dve) {
	return { type: DEVICE_START, dve }
}
