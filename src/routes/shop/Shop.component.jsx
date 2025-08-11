// import SHOP_DATA from "../../shop-data.json";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categoriesPreview.component";
import Category from "../category/category.component";
import { useDispatch } from 'react-redux';
import { getCollectionFromObject } from "../../utils/firebase utils/firebase-utils";

import { fetchCategoriesMapStart } from '../../store/categoriesMap/categoriesMap.action';
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
              dispatch(fetchCategoriesMapStart());
          }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />}/>
    </Routes>
  );
};

export default Shop;
