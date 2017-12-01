const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    output: {
        filename: './dist/bundle.js'
    },
    devtool: '#inline-source-map',
};