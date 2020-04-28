const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
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
    const prod = process.env.NODE_ENV === "production";
    const plugins = [
      ...config.plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/)
    ];
    if (prod) {
      // 배포 환경일 때 플러그인 추가해주기
      plugins.push(new CompressionPlugin()); // index.js.gz
    }
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
      plugins
    };
  }
});
