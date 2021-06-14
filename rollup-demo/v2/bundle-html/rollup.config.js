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

const resolve = (file) => path.resolve(__dirname, file);

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

export default [
  {
    input: resolve('./src/index.ts'),
    output: {
      file: resolve('./dist/index.min.js'),
      format: 'iife',
      name: 'createApp',
    },
    plugins: [
      // livereload(),
      commonjs(),
      nodeResolve(),
      typescript(),
      replace({
        values: {
          'process.env.NODE_ENV': JSON.stringify(env),
          __DEV__: env === 'development',
          __TEST__: env === 'test',
        },
        preventAssignment: true,
      }),
      alias({
        entries: [{ find: '@', replacement: resolve('src') }],
      }),
      isProd && babel(),
      // isProd && terser(),
      json(),
    ],
  },
  {
    input: resolve('./src/util.ts'),
    output: {
      file: resolve('./dist/util.min.js'),
      format: 'cjs',
      name: 'util',
    },
    plugins: [typescript()],
  },
][0];
