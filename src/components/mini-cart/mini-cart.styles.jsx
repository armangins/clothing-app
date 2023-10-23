import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import baseButton, { BaseButton } from "../button/button.styles";

export const Container = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 10%;
  right: 5rem;
  width: 400px;
  height: 700px;
  z-index: 99;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background: white;

  ${BaseButton}{
    &:hover{
      border: 1px solid black;
    }
  }


  @media only screen and (min-width: 767.98px) and (max-width:1024px){
    height: 600px;
    width: 500px;
    top: 6rem;
    right: 4rem;
    background: white;
  }

  @media only screen and (min-width: 1199.98px) and (max-width:1399.98px){
    top: 6rem;
    right: 4rem;
  }

  @media only screen and (min-width:1024px) and (max-width:1199.98px){
    top: 6rem;
    right: 4rem;
  }

  @media only screen and (min-width: 1440px) {
    padding-right: 2%;
    margin-bottom: 20px;
    height: 600px;
    top: 7.2rem;
    right: 5.5rem;
  }

  @media only screen and (max-width: 767px) {
    top: 3rem;
    right: 0rem;
    height: 100vh;
    width: 350px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
    padding: 5px 10px;
  }
`;

export const CloseIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  padding-left: 150px;
  margin-top: 5px;
  position: relative;
  left: 100px;

  @media only screen and (max-width: 1024px) {
    left: 140px;
  }

  @media only screen and (max-width: 767px) {
    left:70px;
  }
`;

export const EmptyCart = styled.div``;

export const CartHeader = styled.div``;

export const ProductContent = styled.div`
  width: 80%;
  padding: 20px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;

  flex-direction: column;
`;

export const ProductImageContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 767px) {
    width: 50%;
    padding: 0px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  box-sizing: border-box;
  align-content: center;
  padding: 15px;
  @media only screen and (max-width: 767px) {
    padding: 5px;
  }
`;

export const RemoveProduct = styled.span`
  cursor: pointer;
  margin-top: 5px;
  text-align: right;
  position: relative;
  top: 5%;
  right: 10%;
  display: inline-block;
`;

export const PriceContainer = styled.span`
  display: flex;
`;

export const CheckoutLink = styled(Link)``;

export const ProductTitle = styled.h3`
  font-family: Montserrat;
  font-size: 18px;
  margin: 2px;
  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Title = styled.h3`



`