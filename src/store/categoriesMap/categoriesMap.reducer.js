
import { CATEGORIES_ACTION_TYPES } from './categoriesMap.actionType';

const INITIAL_STATE = {
    categoriesMap: [],
}

export const categoriesMapReducer = (state = INITIAL_STATE , action) => {
    const {type, payload} = action;

    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP: 
            return {...state , categoriesMap: payload};
        default: 
            return state;
    }
}