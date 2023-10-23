import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 767px) {
    margin-bottom: 100px;
  }

  @media only screnn and (min-width: 767.98px) and (max-width: 1024px) {
    margin-bottom: 150px;
  }
`;
export const Title = styled.h2`
  cursor: pointer;
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  padding-bottom: 10%;

  @media only screen and (max-width: 767px) {
    column-gap: 5px;
    row-gap: 90px;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 20%;
  }
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  font-family: Montserrat;
  color: black;
`;
export const Span = styled.span`

`;
