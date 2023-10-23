
import styled from "styled-components";

export const Container = styled.div`
  padding: 5%;
  height: auto;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10% 35%;

  @media only screen and (max-width:767px){
    width: 100%;
    padding: 5% 5%;
  }

  @media only screen and (max-width:767px){
    width: 100%;
    padding: 5% 5%;
  }
  @media only screen and (min-width: 767.98px) and (max-width: 1024px) {
    width: 100%;
    padding: 10% 25%;
  }
`;

export const Form = styled.form`
  justify-content: center;
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #F5F7F8;
  padding: 5% 10%;
  border-radius:5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;


`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
 

`