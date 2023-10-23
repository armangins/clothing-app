import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  font-size: 18px;

`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  gap: 20px;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  align-content: center;
  align-items: center;
  gap: 20px;
  

  @media only screen and (max-width: 768px) {
    padding-right: 25px;
    padding-bottom: 5px;
    align-items: center;
  }
`;
export const ExtendedContainer = styled.div`
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
justify-content: center;
box-sizing: border-box;
padding-bottom: 50%;
gap: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavBarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBarLink = styled(Link)`
  color: white;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBarLinkExtend = styled(NavBarLink)`

  @media only screen and (max-width: 768px) {
    display: block;
  }
`

export const NavBarLinkExtended = styled(Link)`
  color: white;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;

  @media only screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const NavBarIcons = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  border: none;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuToggle = styled.img`
  
  display: none;
  @media only screen and (max-width:767px){
    display: block;
  }
`
