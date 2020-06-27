import {CONTENT_TITLES, CONTENT_TYPES} from './constants';

export const getPageTitle = (type = CONTENT_TYPES.MEMO) => (CONTENT_TITLES[type] || '').toString().toLowerCase();

export const isNotEmptyArray = (arr) => (Array.isArray(arr) && arr.length > 0);
