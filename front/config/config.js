const serverURL =
  process.env.NODE_ENV === "production"
    ? "https://api.techinterview.kr"
    : "http://localhost:3065";

export { serverURL };
