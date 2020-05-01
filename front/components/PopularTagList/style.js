import styled from "styled-components";
import { device } from "../../styles/device";
import Theme from "../../styles/Theme";
export const PopularTagListWrapper = styled.div`
  display: none;
  min-height: 300px;
  padding-left: 4rem;

  @media ${device.laptop} {
    display: grid;
    grid-template-rows: 2fr repeat(1fr, 6);
    position: fixed;
    right: 203px;
    top: 78px;
    left: 60%;
  }
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const LinkName = styled.a`
  color: ${Theme.themeColor};
  font-size: 0.9rem;
`;

export const TitleWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #cdcdcd;
  display: flex;
  align-items: center;
`;
