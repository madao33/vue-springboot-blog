module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 80,
    proxy: {
      "/api": {
        target: "http://localhost:81",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/flask": {
        target: "http://localhost:5000",
        changeOrigin: true,
        pathRewrite: {
          "^/flask": ""
        }
      }
    },
    disableHostCheck: true
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
};
