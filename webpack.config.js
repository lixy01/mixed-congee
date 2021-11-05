// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // 环境模式
  entry: path.resolve(__dirname, './example/vue/main.js'), // 打包入口
  output: {
    path: path.resolve(__dirname, './example/vue/dist'), // 打包出口
    filename: 'js/[name].js', // 打包完的静态资源文件名
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  stats: 'none',
  devServer: {
    compress: true, // 压缩
    port: 8083,
    hot: true, // 启用热更新
    client: {
      logging: 'error',
      overlay: true,
      progress: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './example/vue/public/index.html'), // 我们要使用的 html 模板地址
      filename: 'index.html', // 打包后输出的文件名
      title: 'test', // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
    }),
    // 添加 VueLoaderPlugin 插件
    new VueLoaderPlugin(),
  ],
};
