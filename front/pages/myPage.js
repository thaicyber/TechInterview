import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import Avatar from "../components/Util/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_PROFILE_IMAGE_REQUEST } from "../reducers/user";
const MyPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  position: relative;
`;
const IconWrap = styled.div`
  position: absolute;
  top: 43%;
  right: 48.4%;
`;
const Form = styled.form``;
const MyPage = () => {
  const { me } = useSelector(state => state.user);
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
  return (
    <Form encType="multipart/form-data">
      <MyPageWrapper>
        <Avatar
          size="superLarge"
          onClick={onClickImgUpload}
          img={me && me.img ? me.img : null}
        >
          <input
            type="file"
            accept="images/*"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
        </Avatar>
      </MyPageWrapper>
      <div>
        <span>{me.nickname}</span>
      </div>
    </Form>
  );
};

export default MyPage;
