const { node } = require("prop-types");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}