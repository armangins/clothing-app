import React from "react";
import "./footer-item.styles.jsx";
import { Container, InnerContainer } from "./footer-item.styles.jsx";

const FooterItem = (props) => {
  const { menusItems } = props;
  return (
    <Container className="footer_title">
      <h4 style={{textAlign: 'center'}}>Lorem</h4>
      <InnerContainer className="footer_item">
        {menusItems.map((item) => {
          return <span key={item.id}>{item.title}</span>;
        })}
      </InnerContainer>
    </Container>
  );
};

export default FooterItem;
