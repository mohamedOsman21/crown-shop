export const categoryMapSelector = (state) =>  state.categories.categoriesMap;
import { createSelector } from 'reselect';
import { CategoriesMapContext } from './../../context/categoriesMapContext';


const selectCategoriesReducer = (state) => state.categories

export const selectIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)