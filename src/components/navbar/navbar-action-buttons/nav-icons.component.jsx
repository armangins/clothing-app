// import React, { useContext } from "react";
// import "./nav-icons.styles.jsx";
// import UserIcon from "../../../assets/icons/user-icon.png";
// import { Link } from "react-router-dom";
// import { UserContext } from "../../../contexts/user.context";
// import { signOutUser } from "../../../utilities/firebase/firebase.utilities";
// import CartIcon from "../../cart-icon/cart-icon.component.jsx";
// import CartDropDown from "../../cart-dropdown/cart-dropdown.component";
// import { CartContext } from "../../../contexts/cart.context";
// import MenuIcon from "../../../assets/icons/menuIcon.png";
// import { Container, List, ListItem ,NavBarExtended } from "./nav-icons.styles.jsx";

// const NavIcons = () => {
//   const { currentUser } = useContext(UserContext);
//   const { isOpen, toggleCart } = useContext(CartContext);

//   const toggleCartDropdown = () => {
//     toggleCart(!isOpen);
//   };

//   return (
//     <Container>
//       <List className="icons_list">

//         {/* sign out */}
//         <ListItem onClick={signOutUser} className="icon_list_item">
//           {currentUser ? (
//             <a className="icon_link">
//               התנתק
//               <img
//                 className="navbar_icon_image"
//                 src={UserIcon}
//                 alt="user_icon"
//               />
//             </a>
//           ) : (
//             <Link to="/auth" className="icon_link">
//               <img
//                 style={{ width: "18px" }}
//                 className="navbar_icon_image"
//                 src={UserIcon}
//                 alt="user_icon"
//               />
//             </Link>
//           )}
//         </ListItem>

//         {/* cart icon */}
//         <ListItem onClick={toggleCartDropdown} className="icon_list_item">
//           <CartIcon></CartIcon>
//         </ListItem>

//         {/* user icon */}
//         <ListItem>
//           <img style={{ width: "20px" }} src={MenuIcon} alt="" />
//         </ListItem>
//         {isOpen && <CartDropDown />}
 
//       </List>
  
//     </Container>
//   );
// };

// export default NavIcons;
