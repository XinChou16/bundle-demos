import path from 'path';

const resolve = (file) => path.resolve(__dirname, file);

export default {
  input: resolve('main.js'),
  output: {
    file: resolve('bundle.iife.js'),
    format: 'iife',
    name: 'bundle',
  },
};
