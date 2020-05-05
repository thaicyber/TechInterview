import React, { useEffect } from "react";
import {
  UserSettingWrapper,
  UserSettingContent,
  TopContent,
  BottomContent,
  TitleWrap,
  Title,
  CancelWrap,
  AvatarMyPageWrap,
  FollowerWrap,
  LogOutWrap,
  MyPageWrap,
  MyPage,
  BackgroundWrapper,
  LikeWrap
} from "./style";
import { CloseOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from "../../reducers/user";
import Link from "next/link";
import Avatar from "../../components/Util/Avatar";
import Theme from "../../styles/Theme";
const UserSetting = props => {
  const { setAvatarClick, setShowMyAccount } = props;
  const { me, isLoggingOut } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const onClickCancel = () => {
    if (setAvatarClick) {
      setAvatarClick(false);
    }
    if (setShowMyAccount) {
      setShowMyAccount(false);
    }
  };
  const onClickLogOut = () => {
    dispatch({
      type: LOG_OUT_REQUEST
    });
    onClickCancel();
  };
  return (
    <BackgroundWrapper>
      <UserSettingWrapper>
        <UserSettingContent>
          <TopContent>
            <TitleWrap>
              <Title>
                <span style={{ fontWeight: "400" }}>{me && me.nickname}</span>
                <span style={{ fontWeight: "600" }}>님</span>
              </Title>
            </TitleWrap>
            <CancelWrap onClick={onClickCancel}>
              <CloseOutlined
                style={{ fontSize: "1.4rem", color: Theme.themeColor }}
              />
            </CancelWrap>
          </TopContent>
          <BottomContent>
            <AvatarMyPageWrap>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar size="large" img={me.img} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <MyPageWrap onClick={onClickCancel}>
                  <Link href="/myPage">
                    <MyPage>MyPage</MyPage>
                  </Link>
                </MyPageWrap>
              </div>
            </AvatarMyPageWrap>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link
                href={{
                  pathname: "/followers",
                  query: { id: me.id }
                }}
                as={`/followers/${me.id}`}
              >
                <a>
                  <FollowerWrap>
                    <span
                      style={{
                        fontSize: "1rem",
                        fontWeight: "800",
                        marginRight: "0.2rem",
                        color: "black"
                      }}
                    >
                      {me && me.Followers && me && me.Followers.length}
                    </span>
                    <span
                      style={{
                        fontSize: "1rem",

                        color: "rgb(101, 119, 134)"
                      }}
                    >
                      Followers
                    </span>
                  </FollowerWrap>
                </a>
              </Link>

              <Link
                href={{
                  pathname: "/followings",
                  query: { id: me.id }
                }}
                as={`/followings/${me.id}`}
              >
                <a>
                  <FollowerWrap>
                    <span
                      style={{
                        marginLeft: "0.7rem",
                        fontSize: "1rem",
                        fontWeight: "800",
                        marginRight: "0.2rem",
                        color: "black"
                      }}
                    >
                      {me && me.Followings && me && me.Followings.length}
                    </span>
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "rgb(101, 119, 134)"
                      }}
                    >
                      Following
                    </span>
                  </FollowerWrap>
                </a>
              </Link>
            </div>
            <Link
              href={{
                pathname: "/likePosts",
                query: { id: me.id }
              }}
              as={`/likePosts/${me.id}`}
            >
              <LikeWrap>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    color: "rgb(101, 119, 134)"
                  }}
                >
                  좋아요
                </span>
              </LikeWrap>
            </Link>
            <LogOutWrap onClick={onClickLogOut}>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "rgb(101, 119, 134)"
                }}
              >
                로그아웃
              </span>
            </LogOutWrap>
            {me && me.level && me.level === "admin" && (
              <Link href="/admin">
                <a>Admin</a>
              </Link>
            )}
          </BottomContent>
        </UserSettingContent>
      </UserSettingWrapper>
    </BackgroundWrapper>
  );
};

export default UserSetting;
