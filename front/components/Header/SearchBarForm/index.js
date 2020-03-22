import React from "react";
import { AtdForm, AtdInput } from "./style";
const onSubmitForm = e => {
  e.preventDefault();
  console.log("!!!!submit");
};
const SearchBarForm = () => {
  return (
    <AtdForm onSubmit={onSubmitForm}>
      <AtdInput htmlType="submit" />
    </AtdForm>
  );
};

export default SearchBarForm;
