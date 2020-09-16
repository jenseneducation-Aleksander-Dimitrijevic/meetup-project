module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://api:5000",
      },
    },
  },
};
