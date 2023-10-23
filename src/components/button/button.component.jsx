import React from "react";
import { BaseButton, InvertedButton,GoogleButton } from "./button.styles";

/**
 * Button component
 * @component
 * @example
 * />
 *
 * @param {string} buttonType the class for the button styles.
 * @param {string} children  The content of the button.
 * @param {string} type the type of the button like submit/button
 * @param {function} onClick event handler
 * @returns {JSX.Element} A React JSX element.
 */

export const BUTTON_TYPE_CLASS = {
  base: 'base',
  inverted: 'inverted',
  googleButton: 'googleButton',
}

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) => ({
  [BUTTON_TYPE_CLASS.base] : BaseButton,
  [BUTTON_TYPE_CLASS.inverted] : InvertedButton,
  [BUTTON_TYPE_CLASS.googleButton] : GoogleButton,

}[buttonType])

  
const Button = ({ children,buttonType, ...otherProps}) => {
  const CustomeButton = getButton(buttonType);
  return (
    <CustomeButton {...otherProps}>
      {children}
    </CustomeButton>
  );
};

export default Button;
