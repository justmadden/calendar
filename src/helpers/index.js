import { uniqueId } from 'lodash-es';
export const ID = () => {
	return uniqueId(`f${(+new Date()).toString(16)}_`);
};
