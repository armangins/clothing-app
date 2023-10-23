import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryItem from "../../components/categories-layout/category-item/category-item.compoment";
import { Container } from  "./categories-layout.styles.jsx";


const CategoriesLayout = () => {
  const { categoriesAndImages } = useContext(CategoriesContext);
  return (
    <>
      <Container >
        {Object.keys(categoriesAndImages).map((title) => {
          return (
            <Fragment key={title}>
              <CategoryItem
                imageUrl={categoriesAndImages[title]}
                title={title}
              />
            </Fragment>
          );
        })}
      </Container>
    </>
  );
};

export default CategoriesLayout;
