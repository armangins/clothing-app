
import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 250px;
  align-items: center;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 5%;


  @media only screen and (max-width:767px){
    flex-direction: column;
    height: 60vh;
    box-sizing: border-box;
  }
`

export const InnerContainer = styled.div`

text-align: right;
    height: 100%;
    width: 50%;
    background-color: black;
    color: $secondary_color;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 0 2%;
    box-sizing: border-box;

    @media only screen and (max-width:767px){
      flex-direction: column;
      width: 100%;
      padding:3%;
  }
  
`

export const Heading = styled.h2`
  color: white;


`

export const Banner = styled.div`
    text-align: right;
    background-image: url("https://i.ibb.co/8sT5P88/Untitled-design-5.png");
    height: 250px;
    background-size: cover;
    height: 100%;
    width: 100%;
    @media only screen and (max-width:767px){
      height: 300px;
  }
  
`
export const ButtonWrapper = styled(Link)`
  padding: 2% 2%;
`