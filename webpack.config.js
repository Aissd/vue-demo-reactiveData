const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    resolve: {
    	// 从左到右查找
    	// path.resolve(__dirname, '') -> 先查找根目录，如果找不到
    	// path.resolve(__dirname, 'node_modules') -> 没有再去node-modules文件夹下查找
    	modules: [path.resolve(__dirname, ''), path.resolve(__dirname, 'node_modules')]
    },
    plugins: [
    	new HtmlWebpackPlugin({
    		template: path.resolve(__dirname, 'public/index.html')
    	})
    ]
};