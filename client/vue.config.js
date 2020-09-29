const path = require("path");
module.exports = {
  outputDir: path.resolve(path.join(__dirname, "../api/public")),
  devServer: {
    proxy: {
      "^/api": {
        target: "http://nodejs-server:5000",
        changeOrigin: true,
      },
    },
  },
};
