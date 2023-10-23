import React, { Fragment, useContext } from "react";
import Button from "../button/button.component";
import {
  CartHeader,
  CloseIcon,
  Container,
  EmptyCart,
  ProductContainer,
  ProductContent,
  ProductImage,
  ProductImageContainer,
  RemoveProduct,
  PriceContainer,
  CheckoutContainer,
  CheckoutLink,
  ProductTitle
} from "./mini-cart.styles";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Mini cart dropdown.
 *
 * @component
 * @example
 * // Usage:
 * <CartDropDown/>
 *
 * @returns {JSX.Element} A React JSX element.
 */

const CartDropDown = () => {
  const { cartProducts, } = useContext(CartContext);
  const count = cartProducts.length;
  const { removeFromCart, toggleCart, isOpen } = useContext(CartContext);

  const toggleCartDropdown = () => {
    toggleCart(!isOpen);
  };

  return (
    <Container>
      <CloseIcon onClick={toggleCartDropdown} icon={faX} />
      {cartProducts.length > 0 ? (
        <CartHeader>
          <h3>Your cart({count})</h3>
          <p>all your products in on place</p>
        </CartHeader>
      ) : (
        <EmptyCart>
          <h3>Your cart is currently empty</h3>
          <p>visit the shop and fill up you cart with your favorite products</p>
        </EmptyCart>
      )}
      {cartProducts.map((cartProduct) => {
        return (
          <ProductContainer key={cartProduct.id}>
                      <RemoveProduct>
                <FontAwesomeIcon
                  onClick={() => {
                    removeFromCart(cartProduct);
                  }}
                  icon={faX}
                />
              </RemoveProduct>
            <ProductContent>
    
              <ProductTitle>{cartProduct.name}</ProductTitle>
              <p>Quantity: {cartProduct.quantity}</p>
              <PriceContainer>
                {/* <p>{cartProduct.quantity}x</p> */}
                <p>Price: {cartProduct.price  *cartProduct.quantity}$</p>
              </PriceContainer>
            </ProductContent>
            <ProductImageContainer>
              <ProductImage src={cartProduct.imageUrl} alt="" />
            </ProductImageContainer>
          </ProductContainer>
        );
      })}
      <>
    
          {cartProducts.length ? (
            <Link to="checkout">
              <Button width="100%" ButtonType="primary_button">CHECKOUT</Button>
            </Link>
          ) : (
            <CheckoutLink  to="shop">
              <Button ButtonType="primary_button">GO TO SHOP</Button>
            </CheckoutLink>
          )}
     
      </>
    </Container>
  );
};
export default CartDropDown;
