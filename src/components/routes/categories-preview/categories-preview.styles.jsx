import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  box-sizing: border-box;
  padding: .5% 5%;


  @media only screen and (min-width: 575.98px) and (max-width:767.98px){
    padding: 5%;
}

@media only screen and (min-width: 767.98px) and (max-width:1024px){
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
}

@media only screen and (min-width:1024px) and (max-width:1199.98px){

}


@media only screen and (min-width: 1199.98px) and (max-width:1399.98px){

}

@media only screen and (min-width:1440px){
  font-size: 20px;
}

`;
