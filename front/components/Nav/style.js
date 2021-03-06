import styled from "styled-components";
import { device } from "../../styles/device";

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7vh;
  background-color: white;
  position: fixed;
  border: 1px solid lightgray;
  bottom: -2px;
  left: 0;
  right: 0;

  @media ${device.laptop} {
    display: none;
  }
`;

export const NavIconWrapper = styled.div`
  width: 25%;
  text-align: center;
  cursor: pointer;

  &:visted {
    color: red;
  }
`;
