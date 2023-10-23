import React, { Fragment, useContext } from "react";
import Cart from "../../assets/icons/cart_icon.svg";

import { CartContext } from "../../contexts/cart.context";
import { toast } from "react-toastify";

import { AddToCartIcon, ProductImage } from "./card.styles";

/**
 * A product card component that also handles the add to cart functionality.
 * @component
 * @example
 * // Usage:
 * <MyComponent product="product" />
 *
 * @param {object} props - products.
 * @returns {JSX.Element} A React JSX element.
 */
const Card = (props) => {
  const { product } = props;
  const { addToCart, toggleCart } = useContext(CartContext);

  /**
   * @function
   * A function that handles the add to cart, also lunches a toast alert for notification.
   * and opens the cart
   */
  const handleAddToCart = () => {
    toast.success(product.name + "was added to the cart", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toggleCart(true);
    addToCart(product);
  };

  return (
    <Fragment>
      <div key={product.id}>
        <AddToCartIcon onClick={handleAddToCart} src={Cart} alt="" />
        <ProductImage src={product.imageUrl} alt="" />
        <div className="product_details">
          <h3 className="product_title">{product.name}</h3>
          <p className="pricing">{product.price} $</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
