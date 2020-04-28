module.exports = {
  distDir: ".next",
  webpack(config) {
    console.log("config", config);
    const prod = process.env.NODE_ENV === "production";
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval"
    };
  }
};
