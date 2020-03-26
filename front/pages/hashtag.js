import React from "react";
import AppLayout from "../components/AppLayout";
const hashtag = () => {
  return <AppLayout></AppLayout>;
};

hashtag.getInitialProps = async context => {
  console.log(context.query.tag);
};
export default hashtag;
