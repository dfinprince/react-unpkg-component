const path = require('path')

/**
 * Determine the array of extensions that should be used to resolve modules.
 */
module.exports = {
  extensions: ['.js', '.jsx'],
  alias: {
    'react': path.resolve(__dirname, './node_modules/react'),
    'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
  }
}
