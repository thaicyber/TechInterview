import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import Avatar from "../components/Util/Avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  UPLOAD_PROFILE_IMAGE_REQUEST,
  PROFILE_IMAGE_DELETE_REQUEST
} from "../reducers/user";
import Theme from "../styles/Theme";
import { Button } from "antd";
const ImageNicknameWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  justify-content: center;
`;
const ButtonWrap = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 2.2rem;
  background-color: ${Theme.themeColor};
  color: white;
  font-size: 1.1rem;
  border-radius: 4px;
  outline: none;
  border-style: none;
  font-weight: 500;
`;
const Form = styled.form``;
const MyPage = () => {
  const { me, isUploadProfileImg, isDeleteProfileImg } = useSelector(
    state => state.user
  );
  const dispatch = useDispatch();
  const imageInput = useRef();
  const onChangeImages = useCallback(e => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append("image", f);
    });
    dispatch({
      type: UPLOAD_PROFILE_IMAGE_REQUEST,
      data: imageFormData
    });
  }, []);
  const onClickImgUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onClickImgDelete = () => {
    dispatch({
      type: PROFILE_IMAGE_DELETE_REQUEST,
      data:
        "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
    });
  };
  return (
    <Form encType="multipart/form-data">
      <ImageNicknameWrapper>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar size="superLarge" img={me && me.img ? me.img : null}></Avatar>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ButtonWrap
            type="primary"
            onClick={onClickImgUpload}
            loading={isUploadProfileImg}
          >
            <span>이미지 업로드</span>
            <input
              type="file"
              accept="images/*"
              multiple
              hidden
              ref={imageInput}
              onChange={onChangeImages}
            />
          </ButtonWrap>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem"
          }}
        >
          <ButtonWrap
            type="primary"
            onClick={onClickImgDelete}
            loading={isDeleteProfileImg}
          >
            <span>이미지 삭제</span>
          </ButtonWrap>
        </div>
      </ImageNicknameWrapper>
    </Form>
  );
};

export default MyPage;
