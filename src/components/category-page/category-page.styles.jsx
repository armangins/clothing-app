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

  @media only screen and (max-with: 767px) {
    column-gap: 5px;
    row-gap: 5px;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 20%;
  }
`;
