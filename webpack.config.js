var path = require("path")

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'everythingcanbejs.js'
    },
    resolveLoader: {
        modules: [
            'node_modules',
             path.resolve(__dirname, 'loaders')
        ]
    },
    module: {
        rules: [
            { test: /\.fun$/, use: 'fun-loader' },
        ]
    }

}
