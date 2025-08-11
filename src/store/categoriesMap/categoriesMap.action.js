import { getCollectionFromObject } from '../../utils/firebase utils/firebase-utils';
import { CATEGORIES_ACTION_TYPES } from './categoriesMap.actionType';


export const fetchCategoriesMapStart = () => {
    return {type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START};
}

export const fetchCategoriesMapSuccess = (categoriesMap) => {
    return {type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoriesMap};
}

export const fetchCategoriesMapFailed = (error) => {
    return {type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, error: error};
}


export const fetchingCategoriesAcync = () => async (dispatch) => {
    dispatch(fetchCategoriesMapStart());

    try{
        const categoiesArray = await getCollectionFromObject();
        dispatch(fetchCategoriesMapSuccess(categoiesArray));

    }catch (err) {
        dispatch(fetchCategoriesMapFailed(err));
    }
}