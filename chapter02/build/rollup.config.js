const path = require('path')
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
function resolveFile(filePath) {
  return path.join(__dirname, '../', filePath)
}


module.exports = {
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-env',
          {
            "useBuiltIns": 'usage',
            "corejs": 3
          }
        ]
      ],
    }),
    terser()
  ]
}