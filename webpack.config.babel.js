export default {
    entry: './extension/frontend/panel.js',
    output: {
        path: './dist/frontend',
        filename: 'panel.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel?cacheDirectory'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    }
};
