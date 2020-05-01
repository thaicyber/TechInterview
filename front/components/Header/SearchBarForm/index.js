import React, { useState } from "react";
import { AtdForm, AtdInput } from "./style";
import { useDispatch, useSelector } from "react-redux";
import UserSetting from "../../../containers/UserSetting";
import Avatar from "../../Util/Avatar";
import Router from "next/router";
import { SearchBarLogoWrapper, SearchBarWrapper, AvatarWrap } from "./style";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
const SearchBarForm = () => {
  const dispatch = useDispatch();
  const [avatarClick, setAvatarClick] = useState(false);
  const { me } = useSelector(state => state.user);
  const [hashtag, setHashtag] = useState("");
  const onSubmitForm = e => {
    e.preventDefault();
    Router.push(
      { pathname: "/hashtag", query: { tag: hashtag } },
      `/hashtag/${hashtag}`
    );
  };
  const onClickAvatar = () => {
    setAvatarClick(true);
    document.body.style.overflowY = "hidden";
  };
  const onChangeInput = e => {
    setHashtag(e.target.value);
  };
  return (
    <AtdForm onSubmit={onSubmitForm}>
      {me ? (
        <SearchBarLogoWrapper>
          <div></div>
          <SearchBarWrapper>
            {/* <AtdInput onChange={onChangeInput} /> */}
            <Link href="/search" prefetch>
              <a>
                <div>
                  <SearchOutlined />
                </div>
              </a>
            </Link>
            <AvatarWrap>
              <Avatar
                onClick={onClickAvatar}
                img={me.img}
                size="small"
              ></Avatar>
            </AvatarWrap>
          </SearchBarWrapper>
        </SearchBarLogoWrapper>
      ) : (
        <Link href="/search" prefetch>
          <a>
            <div>
              <SearchOutlined />
            </div>
          </a>
        </Link>
        // <AtdInput onChange={onChangeInput} />
      )}
      {avatarClick ? (
        <UserSetting
          setAvatarClick={setAvatarClick}
          avatarClick={avatarClick}
        />
      ) : null}
    </AtdForm>
  );
};

export default SearchBarForm;
