module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 82,
    proxy: {
      "/api": {
        target: "http://localhost:81",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  }
};

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
