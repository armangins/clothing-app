import React from "react";
import "./category-item.styles.jsx";
import {  useParams } from "react-router-dom";
import { Category, CategoryTitle, Image } from "./category-item.styles.jsx"

const CategoryItem = (props) => {
  const { title, imageUrl } = props;

  return (
    <Category style={{backgroundImage:`url(${imageUrl})`}} key={title} className="single_category" to={`shop/${title}`}> 
        <CategoryTitle className="category_title">{title}</CategoryTitle>

    </Category>
  )

};
export default CategoryItem;
