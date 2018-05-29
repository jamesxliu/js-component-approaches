const path = require("path");
const fs = require("fs");

const ROOT_PATH = fs.realpathSync(process.cwd());
const COMPONENTS_PATH = path.resolve(ROOT_PATH, "components");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(COMPONENTS_PATH, "react"),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "babel-preset-env",
                            "babel-preset-stage-1",
                            "babel-preset-react"
                        ].map(require.resolve), // https://github.com/babel/babel-preset-env/issues/186#issuecomment-317247283
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            root: ROOT_PATH,
            react_common: path.resolve(COMPONENTS_PATH, "react/common")
        },
        extensions: [".js", ".jsx", ".json", ".vue"]
    },
    devtool: "eval-source-map",
    recordsPath: path.join(__dirname, "webpack.compilation-records.json"),
    node: {
        fs: "empty",
        child_process: "empty"
    }
};