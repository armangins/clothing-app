import { UserContext } from "../../contexts/user.context.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";
import UserIcon from "../../assets/icons/user-icon.png";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import MiniCart from "../mini-cart/mini-cart.component.jsx";
import MenuIcon from "../../assets/icons/menuIcon.png";
import React, { useState, useContext } from "react";
import logoImage from "../../assets/img/logo.svg";
import { signOutUser } from "../../utilities/firebase/firebase.utilities.js";
import "./navbar.styles.jsx";
import {
  Logo,
  NavBarContainer,
  LeftContainer,
  RightContainer,
  NavBarInnerContainer,
  ExtendedContainer,
  NavBarLink,
  NavBarLinkExtended,
  MobileMenuToggle,
  NavBarLinkExtend
} from "./navbar.styles.jsx";

/**
 *
 * function that toggles a class for responsive navigation
 */
const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen, toggleCart } = useContext(CartContext);

  const toggleCartDropdown = () => {
    toggleCart(!isOpen);
  };

  const [showNav, setTogglenavigation] = useState(false);

  const handleMenuToggle = () => {
    setTogglenavigation(!showNav);
  };

  const menusItems = [
    {
      id: 775464,
      title: "Home Page",
      url: "/",
    },

    {
      id: 7751464,
      title: "shop",
      url: "/shop",
    },

    {
      id: 77364,
      title: "categories",
      url: "categories",
    },

    {
      id: 77542,
      title: "FAQ",
      url: "/about",
    },

    {
      id: 7777364,

      title: "contact us",
      url: "/contact-us",
    },
  ];

  return (
    <>
      <NavBarContainer extend={showNav}>
        <NavBarInnerContainer>
          <LeftContainer>
            <MobileMenuToggle
              onClick={handleMenuToggle}
              style={{ width: "20px" }}
              src={MenuIcon}
              alt=""
            />
            <Logo src={logoImage} alt="logo" />

            {menusItems.map(({ title, id, url }) => {
              return (
                <NavBarLink key={id} to={url}>
                  {title}
                </NavBarLink>
              );
            })}
          </LeftContainer>
          <RightContainer>
            {currentUser ? (
              <NavBarLinkExtend onClick={signOutUser}>
                <span>signout</span>
              </NavBarLinkExtend>
            ) : (
              <NavBarLinkExtend to="/auth">
                <img style={{ width: "20px" }} src={UserIcon} alt="" />
              </NavBarLinkExtend>
            )}

            <CartIcon onClick={toggleCartDropdown}></CartIcon>
          </RightContainer>
        </NavBarInnerContainer>
        {showNav ? (
          <ExtendedContainer>
            {menusItems.map(({ title, id, url }) => {
              return (
                <NavBarLinkExtended key={id} to={url}>
                  {title}
                </NavBarLinkExtended>
              );
            })}
          </ExtendedContainer>
        ) : null}
        {<div>{isOpen && <MiniCart />}</div>}
      </NavBarContainer>
    </>
  );
};

export default Navbar;
