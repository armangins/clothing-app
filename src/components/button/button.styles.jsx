import styled from "styled-components";

export const BaseButton = styled.button`
  width: ${(props) => (props.width ? props.width : "100%")};
  box-sizing: border-box;
  border: 1px solid black;
  cursor: pointer;
  color: white;
  padding: 15px 50px 15px 50px;
  background-color: black;
  transition: background-color 0.8s ease;
  transition: 0.3s ease-in-out 0s;
  font-family: Montserrat;
  font-weight: 600;

  &:hover {
    /* transform: scale(1.02); */
    background-color: whitesmoke;
    color: black;
    border: 1px solid transparent;
  }

  @media only screen and (max-width:767px){
    width: 100% !important;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background: transparent;
  border: 1px solid white;
  transition: 0.3s ease-in-out 0s;
`;

export const GoogleButton = styled(BaseButton)`
  background-color: #4285F4 ;
  border: 1px solid #4285F4 ;
;
`
