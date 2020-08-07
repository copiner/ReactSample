export const KIND_START = 'KIND_START';
export const KIND_SUCESS = 'KIND_SUCESS';
export const KIND_FAIL = 'KIND_FAIL';

// ================ action creators ================

export function kindSt(kind) {
	return { type: KIND_START, kind }
}
