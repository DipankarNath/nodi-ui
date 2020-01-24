const path = require("path");

module.exports = {
    webpackConfig: {
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
      },
    },
    title: "nodi-ui",
    styleguideDir: "dist-docs",
    moduleAliases: {
      "nodi-ui": path.resolve(__dirname, "src")
    }
  };