module.exports = {
    devServer: {
        open: true,
        hot: true,
        host: 'localhost',
        port: 8080,
    },
    chainWebpack: config =>
        config.module
            .rule('image-webpack-loader-rule')
            .test(/\.(gif|png|jpe?g|svg)$/)
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .end(),
};
