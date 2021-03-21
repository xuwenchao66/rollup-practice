import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import eslint from '@rollup/plugin-eslint'
const packageJson = require(`../package.json`)
const { dependencies = {}, peerDependencies = {} } = packageJson
const dependenciesNames = Object.keys(dependencies)
const peerDependenciesNames = Object.keys(peerDependencies)
const externalList = [...dependenciesNames, ...peerDependenciesNames]

export default {
  input: `index.js`,
  external: [
    new RegExp(`^(${externalList.join('|')})$`),
    new RegExp(`^(${externalList.join('|')})/`)
  ],
  output: [
    {
      file: `dist/index.es.js`,
      format: 'es'
    },
    {
      file: `dist/index.cjs.js`,
      format: 'cjs'
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    eslint({
      throwOnError: true
    }),
    babel({
      babelHelpers: 'runtime'
    })
  ]
}
