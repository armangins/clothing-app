import React from "react";
import LogoImage from "../../assets/img/logo.svg";
import CardsIcons from "../../assets/icons/cards.png";
import FooterItem from "./footer-item/footer-item.component";
import { Container,Item, LogoContanier,Logo, CreditCards } from "./footer.styles.jsx";
import "./footer.styles.jsx";

const menusItems = [
  {
    id: 775464,
    title: "Home",
  },

  {
    id: 77542,
    title: "About",
  },

  {
    id: 7751464,
    title: "Shop   ",
  },

  {
    id: 77364,
    title: "more",
  },

  {
    id: 7777364,

    title: " Contact",
  },
];

const Footer = () => {
  return (
    <Container>
      <Item >
        <FooterItem menusItems={menusItems} />
      </Item>
      <Item >
        <FooterItem menusItems={menusItems} />
      </Item>
      <Item >
        <FooterItem menusItems={menusItems} />
      </Item>
      <LogoContanier>
        <Logo src={LogoImage} alt="" />
        <Item className="footer_item icons payment-icons">
          <CreditCards className="cards-icons" src={CardsIcons} alt="" />
        </Item>
      </LogoContanier>
    </Container>
  );
};

export default Footer;
