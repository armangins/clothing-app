import React, { useContext, useEffect, useState } from "react";
import Card from "../card/card.component";

import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";

import {
  CategoryPreviewContainer,
  PreviewContainer,
} from "./category-page.styles";

/**
 * Single categoty page component.
 *
 * @component
 * @returns {JSX.Element} A React JSX element.
 */
const CategoryPage = () => {
  const { category } = useParams();
  const { categoriesAndProducts } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesAndProducts[category]);
  }, [category, categoriesAndProducts]);

  return (
    <CategoryPreviewContainer>
      <PreviewContainer>
        {products &&
          products.map((product) => {
            return <Card key={product.id} product={product}></Card>;
          })}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPage;
