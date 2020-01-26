const path = require("path");

module.exports = {
    mode: "production",
    entry: ["@babel/polyfill", "./src/js/index.es6"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.es6|\.jsx/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};