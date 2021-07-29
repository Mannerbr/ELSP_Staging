var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new WebpackBuildNotifierPlugin({
        title: "ELSP Webpack Build",
        logo: "./public/favicon.ico"
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 10000,
        maxSize: 200000,
      }
    }
  }
};
