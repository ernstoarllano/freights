const defaultConfig = require('@wordpress/scripts/config/webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  ...defaultConfig,
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.(sc|sa|c)ss$/,
        exclude: /node_modules/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    ...defaultConfig.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
