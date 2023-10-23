import styled from "styled-components";

export const Container = styled.div`
  margin: 1% 5.5%;
  display: flex;
  box-sizing: border-box;
  background-size: cover;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  background: linear-gradient(0deg, rgba(3, 3, 3, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://i.ibb.co/KF89hCh/Untitled-design-3.webp");

  @media only screen and (max-width: 767px) {
    background-position: 90%;

  }
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  color: white;

  @media only screen and (max-width: 767px) {
    font-size: 28px;
  }
`;

export const SectionSubTitle = styled.p`
  color: white;
  font-family: "Montserrat";
  font-weight: 600;
  margin-bottom: 20px;

  @media only screen and (max-width: 1024px) {
    gap: 20px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 767px) {
    padding: 0px 22px;
  }
`;
