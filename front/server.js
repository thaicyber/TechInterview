const express = require("express");
const next = require("next");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const dotenv = require("dotenv");
// option 설정
const dev = process.env.NODE_ENV !== "production"; // 개발모드
const prod = process.env.NODE_ENV === "production"; // 배포모드
// express와 next를 연결하는 방법
const app = next({ dev });
const handle = app.getRequestHandler();
const path = require("path");
dotenv.config();
// 이 부분이 next에 필요한 내용
// 이렇게 하면 next랑 express가 연결됌.
app.prepare().then(() => {
  const server = express();

  server.use(morgan("dev"));
  server.use("/", express.static(path.join(__dirname, "public")));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: false // https를 사용한다면 true로 바꿔야함
      }
    })
  );
  // 동적 route 추가하는 곳
  server.get("/profile/:id", (req, res) => {
    return app.render(req, res, "/profile", { id: req.params.id });
  });
  server.get("/postLikers/:id", (req, res) => {
    return app.render(req, res, "/postLikers", { id: req.params.id });
  });
  server.get("/followings/:id", (req, res) => {
    return app.render(req, res, "/followings", { id: req.params.id });
  });
  server.get("/followers/:id", (req, res) => {
    return app.render(req, res, "/followers", { id: req.params.id });
  });
  server.get("/commentEdit/:id", (req, res) => {
    return app.render(req, res, "/commentEdit", { id: req.params.id });
  });
  server.get("/comment/:id", (req, res) => {
    return app.render(req, res, "/comment", { id: req.params.id });
  });
  server.get("/hashtag/:tag", (req, res) => {
    return app.render(req, res, "/hashtag", { tag: req.params.tag });
    // 이걸통해서 프론트 hashtag 페이지에 tag가 함께 내려감.
    // app.render를 통해 pages에 "/hashtag"를 찾는다.
  });
  //모든 get요청을 전부 처리함. 화면 띄우는 거 포함
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(prod ? process.env.PORT : 3060, () => {
    console.log(`next+express running on port ${process.env.PORT}`);
  });
});
