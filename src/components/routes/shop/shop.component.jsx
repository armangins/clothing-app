import React from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import CategoryPage from "../../category-page/category-page.component";
import { Route, Routes } from "react-router-dom";

const Shop = () => {
  return (
   <Routes>
    <Route index Component={CategoriesPreview} />
    <Route path=":category"  Component={CategoryPage} />
   </Routes>
  );
};

export default Shop;
