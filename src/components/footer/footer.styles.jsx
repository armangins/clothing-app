import styled from "styled-components";

export const Container = styled.div`
  padding: 2.5% 2%;
  background-color: black;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  gap: 5%;

  @media only screen and (max-width:767px){
    flex-direction:column
  }
 
`;

export const Item = styled.div`
  align-self: stretch;
  height: 100% !important;
  justify-content: stretch;
  display: flex;
  flex-direction: row-reverse;
  flex: 20%;
  height: 100%;
  width: 100%;


`;


export const LogoContanier = styled.div`
  margin-left: 5%;
  display: flex;
  gap: 20px;
  flex-direction:column
`;

export const Logo = styled.img`
  width: 150px;
`;

export const CreditCards = styled.img`
gap: 20px;
  width: 150px;
`;
