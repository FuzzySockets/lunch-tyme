import path from 'path';

module.exports = {
  entry: './src/components/app.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }
};
