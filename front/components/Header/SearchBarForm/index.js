import React from "react";
import { AtdForm, AtdInput, Avatar } from "./style";
import { useSelector } from "react-redux";
const onSubmitForm = e => {
  e.preventDefault();
  console.log("!!!!submit");
};
const SearchBarForm = () => {
  const { me } = useSelector(state => state.user);
  return (
    <AtdForm onSubmit={onSubmitForm}>
      {me ? (
        <>
          <Avatar></Avatar>
          <AtdInput htmlType="submit" isLogin={true} />
        </>
      ) : (
        <AtdInput htmlType="submit" />
      )}
      {/* <Avatar></Avatar>
      <AtdInput htmlType="submit" isLogin={true} /> */}
    </AtdForm>
  );
};

export default SearchBarForm;
