import React from "react";
import styled from "styled-components";
import { Input, Form, Select, Button } from "antd";
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
  display: flex;
  margin-bottom: 1rem;
`;
const AtdInput = styled(Input)`
  width: 80%;
`;
const ImgWrap = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
const LinkWrap = styled.div`
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
  return (
    <AdminWrapper>
      <AdmimContent>
        <AtdForm>
          <SelectCompanyWrap>
            <Label htmlFor="selectCompany">회사선택</Label>
            <AtdSelect name="selectCompany" style={{ width: "20%" }} />
          </SelectCompanyWrap>
          <ContentWrap>
            <Label htmlFor="content">내용입력</Label>
            <Input.TextArea
              name="content"
              style={{ width: "80%", height: "150px" }}
            ></Input.TextArea>
          </ContentWrap>
          <ImgWrap>
            <Label htmlFor="imgAddress">이미지 주소 입력</Label>
            <AtdInput name="imgAddress" />
          </ImgWrap>
          <LinkWrap>
            <Label htmlFor="linkAddress">링크 주소 입력</Label>
            <AtdInput name="linkAddress" />
          </LinkWrap>
          <ButtonWrap>
            <Button style={{ width: "30%", height: "100%" }}>등록</Button>
          </ButtonWrap>
        </AtdForm>
      </AdmimContent>
    </AdminWrapper>
  );
};

export default Admin;
