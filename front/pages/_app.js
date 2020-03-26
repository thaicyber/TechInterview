import React from "react";
import Head from "next/head";
import GlobalStyles from "../styles/GlobalStyles";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import withReduxSaga from "next-redux-saga";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers/index";
import rootSaga from "../sagas";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
const App = ({ Component, store, pageProps }) => {
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
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};
App.getInitialProps = async context => {
  const { ctx, Component } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return pageProps;
};
const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
export default withRedux(configureStore)(withReduxSaga(App));

// 이렇게 감싸주면 기존 App컴포넌트의 기능을 왼쪾의 withRedux기능도 생기면서 확장해주는 개념임.
// withRedux는 App컴포넌트에게 props로 store를 넣어주는 역할을 할거임.
