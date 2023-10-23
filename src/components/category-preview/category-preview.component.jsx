import React from "react";
import Card from "../card/card.component";
import { Link } from "react-router-dom";
import { Container, LinkWrapper, PreviewContainer, Title,Span } from "./category-preview.styles.jsx";


const CategoryPreview = ({ title, products }) => {
  return (
    <Container >
      <Title>
        <LinkWrapper to={title} >
        Go To 
        <Span> {title}  </Span>
        →
        </LinkWrapper>
      </Title>
      <PreviewContainer >
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <Card key={product.id+1} product={product}></Card>;
          })}
      </PreviewContainer>
    </Container>
  );
};

export default CategoryPreview;
