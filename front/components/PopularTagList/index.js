import React from "react";
import { PopularTagListWrapper, LinkWrap, LinkName, TitleWrap } from "./style";
import Link from "next/link";
const PopularTagList = () => {
  const tagName = "리액트";
  return (
    <PopularTagListWrapper>
      <TitleWrap>
        <span>인기 태그</span>
      </TitleWrap>
      <Link>
        <LinkWrap>
          <LinkName>{`# ${tagName}`}</LinkName>
        </LinkWrap>
      </Link>
      <Link>
        <LinkWrap>
          <LinkName>{`# ${tagName}`}</LinkName>
        </LinkWrap>
      </Link>
      <Link>
        <LinkWrap>
          <LinkName>{`# ${tagName}`}</LinkName>
        </LinkWrap>
      </Link>
      <Link>
        <LinkWrap>
          <LinkName>{`# ${tagName}`}</LinkName>
        </LinkWrap>
      </Link>
      <Link>
        <LinkWrap>
          <LinkName>{`# ${tagName}`}</LinkName>
        </LinkWrap>
      </Link>
      <Link>
        <LinkWrap>
          <LinkName>{`# ${tagName}`}</LinkName>
        </LinkWrap>
      </Link>
    </PopularTagListWrapper>
  );
};

export default PopularTagList;
