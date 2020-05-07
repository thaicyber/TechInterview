const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "false"
});
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
module.exports = withBundleAnalyzer({
  distDir: ".next",
  webpack(config) {
    const prod = process.env.NODE_ENV === "production";
    const plugins = [
      ...config.plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      new FilterWarningsPlugin({
        // unable to re-export
        exclude: /export .* Could not load content .*/
      })
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
