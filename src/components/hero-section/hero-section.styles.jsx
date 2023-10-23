import styled from "styled-components";

export const Container = styled.div`
  padding: 5%;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://i.ibb.co/1QPnZj2/Untitled-design-4.png");
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 90vh;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 767px) {
    font-size: 28px;
    width: 100%;
    height: 70vh;
  }
`;

export const Heading = styled.h1`
  width: 60%;
  color: white;
  @media only screen and (max-width: 1024px) {
    font-size: 45px;
    width: 100%;
  }
  @media only screen and (max-width: 767px) {
    font-size: 28px;
    width: 100%;
  }
`;

export const Subtitle = styled.p`
  color: white;
  padding-right: 2%;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  width: 30%;

  @media only screen and (max-width:767px){
    width: 100%;
  }
`;
