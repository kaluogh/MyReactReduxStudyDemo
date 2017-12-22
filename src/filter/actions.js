import {SET_FILTER} from './actionTypes.js';

export const SetFilter = (filterType) => {
    return {
        type: SET_FILTER,
        filter: filterType
    }
}