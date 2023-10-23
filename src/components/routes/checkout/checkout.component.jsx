import React, { Fragment, useContext } from "react";
import "./checkout.styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../../contexts/cart.context";
import {
  faX,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Title,
  Subtitle,
  Image,
  RemoveButton,
  Quantity,
  TitlesGrid,
  ProductsGrid,
  GridItem,
  GridItemImage,
  TitleGridItem,
  TotalContainer,

} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartProducts, removeFromCart, addToCart, clearCart, cartTotal } =
    useContext(CartContext);

  return (
    <Container>
      <Title>Checkout now</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Subtitle>
      <TitlesGrid>
        <TitleGridItem style={{ textAlign: "center" }}>
          <Subtitle>Product</Subtitle>
        </TitleGridItem>
        <TitleGridItem style={{ textAlign: "center" }}>
          <Subtitle>price</Subtitle>
        </TitleGridItem>
        <TitleGridItem style={{ textAlign: "center" }}>
          <Subtitle>quantity</Subtitle>
        </TitleGridItem>
        <TitleGridItem style={{ textAlign: "center" }}>
          <Subtitle>remove</Subtitle>
        </TitleGridItem>
      </TitlesGrid>
      <ProductsGrid>
        {cartProducts.map((product) => {
          return (
            <>
              <GridItemImage>
                <Image src={product.imageUrl} />
                <Subtitle> {product.name} </Subtitle>
              </GridItemImage>
              <GridItem>
                <span>{product.price} $ </span>
              </GridItem>
              <GridItem>
                <Quantity>
                  <FontAwesomeIcon
                    onClick={() => addToCart(product)}
                    icon={faAngleLeft}
                  />
                  {product.quantity}
                  <FontAwesomeIcon
                    onClick={() => removeFromCart(product)}
                    icon={faAngleRight}
                  />
                </Quantity>
              </GridItem>
              <GridItem>
                <RemoveButton>
                  <FontAwesomeIcon
                    onClick={() => clearCart(product)}
                    icon={faX}
                  />
                </RemoveButton>
              </GridItem>
            </>
          );
        })}
      </ProductsGrid>
      {cartTotal ? (
        <TotalContainer>
<h3 className="cart_total">Cart Total:{cartTotal}</h3>
        </TotalContainer>


    

      ) : null}
    </Container>
  );
};

export default Checkout;

{

}
