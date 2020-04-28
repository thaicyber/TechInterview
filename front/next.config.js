const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const webpack = require("webpack");
module.exports = withBundleAnalyzer({
  distDir: ".next",
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html"
    }
  },
  webpack(config) {
    console.log("config", config);
    const prod = process.env.NODE_ENV === "production";
    const plugins = [
      ...config.plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/)
    ];
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
      plugins
    };
  }
});
