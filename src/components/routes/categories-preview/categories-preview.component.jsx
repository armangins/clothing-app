import React, { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import CategoryPreview from "../../category-preview/category-preview.component";
import { Container } from  "./categories-preview.styles.jsx";

const CategoriesPreview = () => {
  const { categoriesAndProducts } = useContext(CategoriesContext);

  return (
    <Container >
      {Object.keys(categoriesAndProducts).map((title) => {
        const products = categoriesAndProducts[title];
        return (
          <CategoryPreview
          key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </Container>
  );
};

export default CategoriesPreview;
