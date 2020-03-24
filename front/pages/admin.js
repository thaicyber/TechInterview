import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Input, Form, Select, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_COMPANIES_REQUEST } from "../reducers/user";
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
const SelectCompanyWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  width: 20%;
`;
const AtdSelect = styled(Select)`
  width: 20%;
`;
const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;
const AtdInput = styled(Input)`
  width: 80%;
`;
const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;
const LinkWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;
const DateWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;
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
  const { companies } = useSelector(state => state.user);
  useEffect(() => {
    dispatch({
      type: LOAD_COMPANIES_REQUEST
    });
  }, []);
  const [companyId, setCompanyId] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
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
  const onChangeCompanyId = value => {
    setCompanyId(value);
  };
  const onSubmitPost = useCallback(
    e => {
      e.preventDefault();
      console.log({
        companyId,
        text,
        img,
        link,
        date
      });
    },
    [companyId, text, img, link, date]
  );
  return (
    <AdminWrapper>
      <AdmimContent>
        <AtdForm onSubmit={onSubmitPost}>
          <SelectCompanyWrap>
            <Label htmlFor="selectCompany">회사선택</Label>
            <AtdSelect
              name="selectCompany"
              style={{ width: "20%" }}
              onChange={onChangeCompanyId}
            >
              {companies &&
                companies.map(v => (
                  <Select.Option value={v.id}>{v.nickname}</Select.Option>
                ))}
            </AtdSelect>
          </SelectCompanyWrap>
          <ContentWrap>
            <Label htmlFor="content">내용입력</Label>
            <Input.TextArea
              name="content"
              style={{ width: "80%", height: "150px" }}
              onChange={onChangeText}
            ></Input.TextArea>
          </ContentWrap>
          <ImgWrap>
            <Label htmlFor="imgAddress">이미지 주소 입력</Label>
            <AtdInput name="imgAddress" onChange={onChangeImg} />
          </ImgWrap>
          <LinkWrap>
            <Label htmlFor="linkAddress">링크 주소 입력</Label>
            <AtdInput name="linkAddress" onChange={onChangeLink} />
          </LinkWrap>
          <DateWrap>
            <Label htmlFor="date">날짜 입력</Label>
            <AtdInput name="date" onChange={onChangeDate} />
          </DateWrap>
          <ButtonWrap>
            <Button style={{ width: "30%", height: "100%" }} htmlType="submit">
              등록
            </Button>
          </ButtonWrap>
        </AtdForm>
      </AdmimContent>
    </AdminWrapper>
  );
};

export default Admin;
