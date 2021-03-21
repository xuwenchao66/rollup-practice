import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
const dir = 'basic/'

export default {
  input: `${dir}index.js`,
  output: [
    {
      file: `${dir}dist/index.es.js`,
      format: 'es'
    },
    {
      file: `${dir}/dist/index.cjs.js`,
      format: 'cjs'
    }
  ],
  plugins: [nodeResolve(), commonjs(), babel()]
}
