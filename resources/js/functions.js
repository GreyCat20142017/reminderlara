import {CONTENT_TITLES, CONTENT_TYPES} from './constants';

export const getPageTitle = (type = CONTENT_TYPES.MEMO) => (CONTENT_TITLES[type] || '').toString().toLowerCase();

export const isNotEmptyArray = (arr) => (arr && Array.isArray(arr) && arr.length > 0);

export const isActive = (active, href) => (active && active.startsWith(href));

export const isValidIndex = (index, testedArray) => (((index >= 0) && (index < testedArray.length)));
