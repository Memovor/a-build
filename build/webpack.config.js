const path = require('path')
module.exports = {
    entry: './src/index.js', //入口文件
    output: {
        path: path.resolve(__dirname, '../dist'), // 打包所在的文件目录
        filename: 'bundle.js' // 打包生成的文件名称
    },
    mode: 'production', // 模式
}