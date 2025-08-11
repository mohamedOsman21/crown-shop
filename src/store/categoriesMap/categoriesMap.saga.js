import { call, put, takeLatest, all } from "redux-saga/effects";
import { getCollectionFromObject } from "../../utils/firebase utils/firebase-utils";
import { CATEGORIES_ACTION_TYPES } from "./categoriesMap.actionType";
import {fetchCategoriesMapSuccess, fetchCategoriesMapFailed} from './categoriesMap.action'



export const fetchingCategoriesAcync = () => async (dispatch) => {
    dispatch(fetchCategoriesMapStart());

    try{
        const categoiesArray = await getCollectionFromObject();
        dispatch(fetchCategoriesMapSuccess(categoiesArray));

    }catch (err) {
        dispatch(fetchCategoriesMapFailed(err));
    }
}


export function* fetchCategoriesAcync() {
    try{
        const categoiesArray = yield call(getCollectionFromObject);
        yield put(fetchCategoriesMapSuccess(categoiesArray));

    }catch (err) {
        yield put(fetchCategoriesMapFailed(err));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAcync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}