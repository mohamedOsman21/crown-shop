import { createContext, useState, useEffect } from "react";
import { getCollectionFromObject } from "../utils/firebase utils/firebase-utils";
// import PRODUCTS_DATA from '../shop-data.json';




export const CategoriesMapContext = createContext({
    categoriesMap: [],
})

export const CategoriesMapProvider = ({children}) => {

    const [categoriesMap , setCategoriesMap] = useState([]);
    const value = {categoriesMap};

    useEffect(() => {
        const getProduct = async() => {
            const categoryMap = await  getCollectionFromObject()
            setCategoriesMap(categoryMap)
        }
        getProduct();
    }, [])


    return <CategoriesMapContext.Provider value={value}> {children} </CategoriesMapContext.Provider>
} 



