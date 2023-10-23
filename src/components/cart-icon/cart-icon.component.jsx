import react from "react";
import Icon from "../../assets/icons/Cart_icon.png";
import { Cart } from "./cart-icon.styles.jsx";


/**
 * The cart icon component
 * @return {JSX Element}
 */
const CartIcon = (props) => {
  return (
    <>
      <Cart onClick={props.onClick} src={Icon} alt="cart_icon" />
    </>
  );
};

export default CartIcon;