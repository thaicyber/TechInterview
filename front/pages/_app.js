import React from "react";
import Head from "next/head";
import GlobalStyles from "../styles/GlobalStyles";
import AppLayout from "../components/AppLayout";
const App = ({ Component }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Frank</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.css"
        />
      </Head>
      {/* <AppLayout> */}
      <Component />
      {/* </AppLayout> */}
    </>
  );
};

export default App;
