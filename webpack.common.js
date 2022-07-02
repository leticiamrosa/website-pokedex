const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main-bundle-[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@domain': path.join(__dirname, 'src/domain'),
      '@data': path.join(__dirname, 'src/data'),
      '@infra': path.join(__dirname, 'src/infra'),
      '@main': path.join(__dirname, 'src/main'),
      '@presentation': path.join(__dirname, 'src/presentation'),
      '@components': path.join(__dirname, 'src/presentation/components'),
      '@styles': path.join(__dirname, 'src/presentation/styles')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv()
  ]
}
