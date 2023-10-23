import styled from "styled-components";

export const Container = styled.div`
box-sizing: border-box;
height: auto;
margin-top: 10px;
display: flex;
padding: 1% 5%;
flex-wrap: wrap;


@media only screen and (max-width: 1024px) {
    font-size: 28px;
    width: 100%;
    flex-wrap: wrap;
    flex-grow: 1;
  }
` 



