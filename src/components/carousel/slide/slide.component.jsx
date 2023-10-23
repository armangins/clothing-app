import React from "react";
import {
  ProductImage,
  ProductTitle,
  SlideContainer,
} from "../../carousel/slide/slide.styles";

/**
 * Single slide for the carousel component
 * @component
 * @param {object} props products
 * @returns {JSX.Element} A React JSX element.
 */
const Slide = (props) => {
  const { product } = props;
  return (
    <>
      <SlideContainer key={product.id}>
        <ProductImage className="product_img" src={product.imageUrl} alt="" />
        <ProductTitle className="product_title">{product.name}</ProductTitle>
        <p style={{marginLeft:'10px'}} >{product.price}$</p>
      </SlideContainer>
    </>
  );
};

export default Slide;
