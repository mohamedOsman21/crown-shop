

const createAction = (type, payload) => ({type, payload});

export const setCategoriesMap = (categoryMap) => {
    createAction('SET_CATEGORIES_MAP', categoryMap);
}