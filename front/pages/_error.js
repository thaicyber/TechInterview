import React from "react";

const Error = ({ statusCode }) => {
  return (
    <div>
      <h1>{`${statusCode} ERROR`}</h1>
    </div>
  );
};
Error.defaultProps = {
  statusCode: 400
};
Error.getInitialProps = async context => {
  const statusCode = context.res
    ? context.res.statusCode
    : context.err
    ? context.err.statusCode
    : null;
  return { statusCode };
};

export default Error;
