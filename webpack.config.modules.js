const path = require('path');

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      include: path.resolve(__dirname, "src"),
      exclude: /node_modules/,
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            fallback: "file-loader",
            name: "[name][md5:hash].[ext]",
            outputPath: 'assets/',
            publicPath: '/assets/'
          }
        }
      ]
    },
    {
      test: /\.css$/,
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
      ],
    },
    {
      test: /\.(scss)$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]_[local]_[hash:base32]',
            sourceMap: true,
            minimize: true,
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    },
  ],
}
