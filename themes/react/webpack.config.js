module.exports = {
    // define entry file and output
    entry: {
        main: './src/index.js',
    },
    output: {
        path: __dirname + '/assets/javascript/',
        filename: "bundle.js"
    },
    // define babel loader
    module: {
        rules: [
            { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};
