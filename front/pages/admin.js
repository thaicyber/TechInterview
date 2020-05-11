import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Input, Form, Select, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_COMPANIES_REQUEST } from "../reducers/user";
import { ADD_POST_REQUEST } from "../reducers/post";
import Router from "next/router";
const AdminWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem 3rem;
`;
const AdmimContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgray;
`;
const AtdForm = styled(Form)``;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;
const SelectCompanyWrap = styled(Wrap)``;
const TitleWrap = styled(Wrap)``;
const Label = styled.label`
  width: 20%;
`;
const AtdSelect = styled(Select)`
  width: 20%;
`;
const ContentWrap = styled(Wrap)``;
const AtdInput = styled(Input)`
  width: 80%;
`;
const ImgWrap = styled(Wrap)``;
const LinkWrap = styled(Wrap)``;
const DateWrap = styled(Wrap)``;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 1rem 1rem;
`;
const Admin = () => {
  const dispatch = useDispatch();
  const { companies, me } = useSelector(state => state.user);

  useEffect(() => {
    if (!me) {
      Router.push("/");
      return;
    }
    if (me && me.level !== "admin") {
      alert("관리자용 페이지 입니다. 어서 나가주세요!");
      Router.push("/");
      return;
    }
    dispatch({
      type: LOAD_COMPANIES_REQUEST
    });
  }, [me]);
  const [companyId, setCompanyId] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [previewContent, setPreviewContent] = useState("");
  const [type, setType] = useState("");
  const onChangeDate = e => {
    setDate(e.target.value);
  };
  const onChangeLink = e => {
    setLink(e.target.value);
  };
  const onChangeImg = e => {
    setImg(e.target.value);
  };
  const onChangeText = e => {
    setText(e.target.value);
  };
  const onChangePreviewContent = e => {
    setPreviewContent(e.target.value);
  };
  const onChangeCompanyId = value => {
    setCompanyId(value);
  };

  const onChangeType = value => {
    setType(value);
  };
  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const postTypes = ["frontend", "backend", "network", "database", "algorithm"];
  const onSubmitPost = useCallback(
    e => {
      e.preventDefault();
      dispatch({
        type: ADD_POST_REQUEST,
        data: {
          content: text,
          companyId,
          img,
          link,
          publishedTime: date,
          title,
          previewContent,
          type
        }
      });
      setDate("");
      setImg("");
      setText("");
      setTitle("");
      setLink("");
      setPreviewContent("");
      setType("");
    },
    [companyId, text, img, link, date, title, type, previewContent]
  );
  return me && me.level === "admin" ? (
    <AdminWrapper>
      <AdmimContent>
        <AtdForm onSubmit={onSubmitPost}>
          <SelectCompanyWrap>
            <Label htmlFor="selectCompany">회사선택</Label>
            <AtdSelect
              name="selectCompany"
              style={{ width: "40%" }}
              onChange={onChangeCompanyId}
            >
              {companies &&
                companies.map(v => (
                  <Select.Option key={v.id} value={v.id}>
                    {v.nickname}
                  </Select.Option>
                ))}
            </AtdSelect>
          </SelectCompanyWrap>

          <SelectCompanyWrap>
            <Label htmlFor="selectType">주제선택</Label>
            <AtdSelect
              name="selectType"
              style={{ width: "40%" }}
              onChange={onChangeType}
            >
              {postTypes.map(v => (
                <Select.Option key={v} value={v}>
                  {v}
                </Select.Option>
              ))}
            </AtdSelect>
          </SelectCompanyWrap>

          <TitleWrap>
            <Label htmlFor="title">제목</Label>
            <AtdInput name="title" onChange={onChangeTitle} value={title} />
          </TitleWrap>
          <ContentWrap>
            <Label htmlFor="content">해시태그</Label>
            <Input.TextArea
              name="content"
              style={{ width: "80%", height: "40px" }}
              onChange={onChangeText}
              value={text}
            ></Input.TextArea>
          </ContentWrap>

          <ContentWrap>
            <Label htmlFor="previewContent">미리보기 내용</Label>
            <Input.TextArea
              name="previewContent"
              style={{ width: "80%", height: "200px" }}
              onChange={onChangePreviewContent}
              value={previewContent}
            ></Input.TextArea>
          </ContentWrap>

          <ImgWrap>
            <Label htmlFor="imgAddress">이미지 주소 입력</Label>
            <AtdInput name="imgAddress" onChange={onChangeImg} value={img} />
          </ImgWrap>
          <LinkWrap>
            <Label htmlFor="linkAddress">링크 주소 입력</Label>
            <AtdInput name="linkAddress" onChange={onChangeLink} value={link} />
          </LinkWrap>
          <DateWrap>
            <Label htmlFor="date">날짜 입력</Label>
            <AtdInput name="date" onChange={onChangeDate} value={date} />
          </DateWrap>
          <ButtonWrap>
            <Button style={{ width: "30%", height: "100%" }} htmlType="submit">
              등록
            </Button>
          </ButtonWrap>
        </AtdForm>
      </AdmimContent>
    </AdminWrapper>
  ) : null;
};

export default Admin;
