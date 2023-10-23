import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  padding: 5%;
  align-items: center;
  box-sizing: border-box;
`

export const Title = styled.h2`
  width: 100%;
`

export const Subtitle = styled.h4`
  color: black;
  font-family: "Montserrat";
  font-weight: 600;
  margin-bottom: 20px;
  color: black;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    gap: 20px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 767px) {
    /* padding: 0px 22px; */
    font-size: 14px;
  }
`

export const TitlesGrid = styled.div`
  display: grid;
  width: 100%;
  border-bottom: 2px solid rgb(241 245 249);
  grid-template-columns: repeat(4, 1fr);
`

export const TitleGridItem = styled.div`
  
  text-align: center;
  @media only screen and (max-width: 767px) {
    text-align: left;
    margin: 0;
  }
`
export const ProductsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
`

export const GridItemImage = styled.div`
  margin: 10px 0px;
  border-bottom: 2px solid rgb(241 245 249);
`

export const GridItem = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20%;
  border-bottom: 2px solid rgb(241 245 249);
`

export const Quantity = styled.span`
display: flex;
gap: 20px;
`

export const RemoveButton = styled.span`
  cursor: pointer;
  width: 100%;
  text-align: center;
`

export const Image = styled.img`
  width: 100%;
`

export const TotalContainer = styled.div`
display: flex;
width: 100%;
justify-content: flex-start;
`




