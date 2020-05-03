import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import Avatar from "../components/Util/Avatar";
import { CameraOutlined } from "@ant-design/icons";
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
  right: 175px;
`;
const Form = styled.form``;
const MyPage = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const onChangeImages = useCallback(e => {
    console.log(e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append("image", f);
    });
    console.log("onChangeImages", imageFormData);
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
        <Avatar size="superLarge" onClick={onClickImgUpload}>
          <input
            type="file"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
          <IconWrap>
            <CameraOutlined style={{ color: "white", fontSize: "20px" }} />
          </IconWrap>
        </Avatar>
      </MyPageWrapper>
    </Form>
  );
};

export default MyPage;
