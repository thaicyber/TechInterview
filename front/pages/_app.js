import React from "react";
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
import AppLayout from "../components/AppLayout";
import Axios from "axios";
import { LOAD_USER_REQUEST } from "../reducers/user";
import Helmet from "react-helmet";
import { Container } from "next/app";
const App = ({ Component, store, pageProps }) => {
  return (
    <Container>
      <Provider store={store}>
        <Helmet
          title="테크인터뷰"
          htmlAttributes={{ lang: "ko" }}
          meta={[
            {
              charset: "UTF-8"
            },
            {
              name: "viewport",
              content:
                "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
            },
            {
              "http-equiv": "X-UA-Compatible",
              content: "IE=edge"
            },
            {
              name: "description",
              content: "개발자 면접준비는 테크인터뷰"
            },
            {
              name: "og:title",
              content: "테크인터뷰"
            },
            {
              name: "og:description",
              content: "개발자 면접준비는 테크인터뷰"
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              property: "og:image",
              content: "http://techinterview.kr/logoCenterBlue.jpg"
            }
          ]}
          link={[
            { rel: "shortcut icon", href: "/favicon.ico" },
            {
              rel: "stylesheet",
              href:
                "https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.css"
            },
            {
              rel: "stylesheet",
              href: "spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
            }
          ]}
          script={[
            {
              src: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.js"
            }
          ]}
        />
        <GlobalStyles />

        <ThemeProvider theme={Theme}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </Provider>
    </Container>
  );
};
App.getInitialProps = async context => {
  const { ctx, Component } = context;
  let pageProps = {};
  const cookie = ctx.isServer ? ctx.req.headers.cookie : ""; // csr일경우 cxt에 req가 없어서 error 방지
  if (ctx.isServer && cookie) {
    //csr일경우 굳이 할 필요 없음.
    Axios.defaults.headers.Cookie = cookie;
    // defaults 모든 axios요청에 공통적으로 들어감.
  }
  const state = ctx.store.getState();
  if (!state.user.me) {
    ctx.store.dispatch({
      type: LOAD_USER_REQUEST
    });
  }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
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
// withReduxSaga
