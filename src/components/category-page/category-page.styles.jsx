  import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
`;
export const PreviewContainer = styled.div`
  box-sizing: border-box;
  padding: 1%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  padding-bottom: 10%;
  row-gap: 90px;
  width: 100%;

  @media only screen and (max-width:767px){
    display: grid;
    column-gap: 5px;
    row-gap: 90px;
    grid-template-columns: repeat(2, 1fr);
    padding: 0% 5% 35% 5%;
  }

`;
