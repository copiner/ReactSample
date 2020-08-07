export const TEMPLE_START = 'TEMPLE_START';
export const TEMPLE_SUCESS = 'TEMPLE_SUCESS';
export const TEMPLE_FAIL = 'TEMPLE_FAIL';

// ================ action creators ================

export function templeSt(tmp) {
	return { type: TEMPLE_START, tmp }
}
