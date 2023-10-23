

import styled from "styled-components";

export const InputContainer  = styled.div`
      width: 100%;
  display: flex;
   flex-direction: column;
  row-gap: 10px;
  padding: 8px 0px;
`

export const Input = styled.input`

    padding: 5px;
    margin-bottom: 0px;
    width: 100%;
    box-sizing: border-box;
    border-top: 0px;
    border-right: 0px;
     border-left: 0px;
     border-bottom: 1px solid rgb(181, 181, 181);

     &:focus{
        outline: none;
     }
    
`
