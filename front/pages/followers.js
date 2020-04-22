import React from "react";

const followers = ({ id }) => {
  return <div>followers/{id}</div>;
};
followers.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};
export default followers;
