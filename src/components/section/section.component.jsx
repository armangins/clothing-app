import React from "react";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
import {Container,SectionSubTitle,SectionTitle} from "./section.styles";


const Section = () => {
  return (
    <Container>
        <SectionTitle >Explore our new collections </SectionTitle>
        <SectionSubTitle>Explore our new collections and arrival</SectionSubTitle>
        <Link to="shop">
        <Button  ButtonType="primary_button">SHOP NOW </Button>
        </Link>
    </Container>
  );
};

export default Section;
