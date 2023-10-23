import React from "react";
import "./hero-section.styles.jsx";
import Button , { BUTTON_TYPE_CLASS } from "../button/button.component";
import { Link } from "react-router-dom";
import { Heading,Container,Subtitle, ButtonContainer } from "./hero-section.styles.jsx";

const Hero = () => {
  return (
    <Container >
      <Heading >
        Where fashion meets function -  bags for every Journey!
      </Heading>
      <Subtitle >
        Carry Style, Embrace Adventure: Your Bag Haven
      </Subtitle>
      <ButtonContainer >
        <Link to="shop">
        <Button width="70%" ButtonType={BUTTON_TYPE_CLASS.base}>SHOP NOW</Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
};
export default Hero;
