// rollup.config.js
import json from 'rollup-plugin-json';
// import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'bundle2.js',
    format: 'cjs'
  },
  plugins: [
    json(),
    // babel({
    //   exclude: 'node_modules/**'
    // })
  ]
};