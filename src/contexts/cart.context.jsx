import { createContext, useEffect, useState } from "react";

/**
 * Helper funtion to check if a product is already in cart or not
 * if the products is already in cart its add to the quantity
 * in not it just the add the product to the cart
 *
 * @param {arrayt} cartProducts - The current cart (also empty).
 * @param {Object} productToAdd - The product needed to be added to the cart.
 * @returns {object} new updaded cart products.
 */
const addProductToCart = (cartProducts, productToAdd) => {
  const existingProduct = cartProducts.find((cartProduct) => {
    return cartProduct.id == productToAdd.id;
  });
  if (existingProduct) {
    return cartProducts.map((cartProducts) =>
      cartProducts.id == productToAdd.id
        ? { ...cartProducts, quantity: cartProducts.quantity + 1 }
        : cartProducts
    );
  }
  return [...cartProducts, { ...productToAdd, quantity: 1 }];
};

/**
 * Helper function to remove product form cart
 * checks if the product is already in cart if it decrement quantity
 * else remove from cart
 * if not just remove it from cart
 *
 * @param {arrayt} cartProducts - The current cart (also empty).
 * @param {Object} productToRemove - The product needed to be removed.
 * @returns {object} new updaded cart products.
 */
const removeProductFromCart = (cartProducts, productToRemove) => {
  const existingProduct = cartProducts.find((cartProduct) => {
    return cartProduct.id == productToRemove.id;
  });

  if (existingProduct.quantity == 1) {
    return cartProducts.filter((product) => {
      return product.id !== productToRemove.id;
    });
  }

  return cartProducts.map((cartProducts) => {
    return cartProducts.id == productToRemove.id
      ? { ...cartProducts, quantity: cartProducts.quantity - 1 }
      : cartProducts;
  });
};

const clearCartFromProducts = (cartProducts, productToRemove) => {
  return cartProducts.filter((product) => {
    return product.id !== productToRemove.id;
  });
};

export const CartContext = createContext({
  isOpen: false,
  toggleCart: () => {},
  cartProducts: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, toggleCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setTotal] = useState(0);


  useEffect(()=>{
    const newCartTotal=cartProducts.reduce((total,product)=>total + product.quantity * product.price ,0);
    setTotal(newCartTotal);
  },[cartProducts])

  const addToCart = (productToAdd) => {
    setCartProducts(addProductToCart(cartProducts, productToAdd));
  };
  const removeFromCart = (productToRemove) => {
    setCartProducts(removeProductFromCart(cartProducts, productToRemove));
  };

  const clearCart = (productToRemove) => {
    setCartProducts(clearCartFromProducts(cartProducts, productToRemove));
  };
  const value = {
    isOpen,
    toggleCart,
    addToCart,
    cartProducts,
    removeFromCart,
    clearCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
