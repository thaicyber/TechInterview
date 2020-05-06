import styled from "styled-components";
import { device } from "../../styles/device";

export const FollowerWrap = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-auto-rows: 80px;
  border-bottom: 1px solid lightgray;

  @media ${device.mobileL} {
    grid-template-columns: 20% 80%;
  }
  @media ${device.tablet} {
    grid-template-columns: 10% 90%;
  }
  @media ${device.laptop} {
    grid-template-columns: 20% 80%;
  }
`;
export const UserNicknameWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1rem;
  padding-left: 0.5rem;
  font-weight: 400;
  align-items: center;
`;
export const AvartarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
`;
export const UserNickname = styled.span``;
