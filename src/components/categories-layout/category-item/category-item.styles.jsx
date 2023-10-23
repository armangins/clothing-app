import styled from "styled-components";
import { Link } from "react-router-dom";

export const Category = styled(Link)`
  position: relative;
  overflow: hidden;
  margin: 10px 10px;
  width: 350px;
  height: 350px;
  flex-grow: 1;
  background-size: cover;
  justify-content: center;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 1920px) {

    width: 300px;
  height: 300px;
 
}
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;


`;

export const CategoryTitle = styled.h3`
  color: white;
  transition: transform 0.3s ease;
  text-transform: capitalize;
  background: rgba(0, 0, 0, 0.718);
  padding: 10px 50px;
  position: absolute;
  z-index: 2;
  align-items: baseline;
  font-family: Montserrat;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }


`;
