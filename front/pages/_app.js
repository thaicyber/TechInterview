import React from "react";
import Head from "next/head";
import GlobalStyles from "../styles/GlobalStyles";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/user";
const App = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Head>
        <title>Frank</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.css"
        />
      </Head>
      <Component />
    </Provider>
  );
};

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(App);
// 이렇게 감싸주면 기존 App컴포넌트의 기능을 왼쪾의 withRedux기능도 생기면서 확장해주는 개념임.
// withRedux는 App컴포넌트에게 props로 store를 넣어주는 역할을 할거임.
