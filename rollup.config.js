import autoprefixer from 'autoprefixer'
import sass from 'node-sass'

import babel from 'rollup-plugin-babel'
import clean from 'postcss-clean'
import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    external(),
    copy({
      'src/fonts': 'dist/fonts'
    }),
    postcss({
      preprocessor: (content, id) => new Promise((resolve, reject) => {
        const result = sass.renderSync({ file: id })
        resolve({ code: result.css.toString() })
      }),
      plugins: [autoprefixer, clean],
      sourceMap: true,
      extract: 'dist/css/bundle.min.css',
      extensions: ['.sass', '.scss', '.css']
    }),
    url(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}
