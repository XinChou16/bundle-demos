import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import livereload from 'rollup-plugin-livereload';
import alias from '@rollup/plugin-alias';
import vue from 'rollup-plugin-vue';
import serve from 'rollup-plugin-serve';

import example from './plugins/example';

const resolve = (file) => path.resolve(__dirname, file);

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

export default [
  {
    input: resolve('index.js'),
    // input: './plugins/vconsole.js',
    output: {
      file: resolve('./dist/main.js'),
      format: 'es',
      name: 'createApp',
    },
    plugins: [
      // livereload(),
      commonjs(),
      nodeResolve(),
      //   typescript(),
      vue({
        css: true,
      }),
      replace({
        values: {
          'process.env.NODE_ENV': JSON.stringify(env),
          __DEV__: env === 'development',
        },
        preventAssignment: true,
      }),
      alias({
        entries: [{ find: '@', replacement: resolve('src') }],
      }),
      !isProd &&
        serve({
          port: 8090,
          contentBase: './dist',
        }),
      isProd && babel(),
      // isProd && terser(),
      json(),
    ],
  },
  {
    input: './entry-plugin.js',
    plugins: [commonjs(), nodeResolve(), example()],
    output: [
      {
        file: 'dist/bundle.js',
        format: 'cjs',
      },
    ],
  },
];
