const path = require('path');

const resolve = (file) => path.resolve(__dirname, file);

module.exports = [
  {
    input: resolve('main.js'),
    output: {
      file: resolve('bundle.js'),
      format: 'umd',
      name: 'Utils',
      amd: {
        id: 'lib/utils',
      },
      banner: '/* Xin@2021 */',
    },
  },
];
