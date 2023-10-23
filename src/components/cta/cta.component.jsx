import React from "react";
import {Banner, Container, InnerContainer,Heading, ButtonWrapper } from "./cta.styles.jsx";
import Button, {BUTTON_TYPE_CLASS} from "../button/button.component.jsx";
import { Link } from "react-router-dom";


const CallToAction = () => {
  return (
    <Container>
      <Banner ></Banner>
      <InnerContainer >
        <Heading>
          Introducing our new arrivals
        </Heading>
        <p style={{color:'white',padding:'2%'}}>Lorem ipsum dolor sit amet consectetur,  deleniti sapiente ut, illum impedit dolorum eaque   , consectetur amet aliquid modi!
        magnam hic sit error voluptate voluptatem molestiae quidem! Distinctio vero .</p>
        <ButtonWrapper to="shop">
        <Button width="100%" buttonType={BUTTON_TYPE_CLASS.inverted}>SHOP NOW </Button>
        </ButtonWrapper>
      </InnerContainer>
    </Container>
  );
};

export default CallToAction;
