import styled from "styled-components"

export const Container = styled.div`

box-sizing: border-box;
  width: 100%;
  color: white;
  
`

export const InnerContainer = styled.div`
      padding: 5% 0% 10% 5%;
    display: flex;
    flex-flow: column;
    gap: 20px;
    @media only screen and (max-width:767px){
    align-items: center;
  }
`
