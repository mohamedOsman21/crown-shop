
import { CATEGORIES_ACTION_TYPES } from './categoriesMap.actionType';

const INITIAL_STATE = {
    categoriesMap: [],
    isLoading: false,
    error: null
}

export const categoriesMapReducer = (state = INITIAL_STATE , action) => {
    const {type, payload} = action;

    switch(type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START: 
            return {...state, isLoading: true};
        
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, categoriesMap: payload, isLoading: false};

        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {...state, error: payload, isLoading: false};

        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP: 
            return {...state , categoriesMap: payload};

        default: 
            return state;
    }
}