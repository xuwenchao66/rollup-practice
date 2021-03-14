export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/index.es.js',
        format: 'es'
      },
      {
        file: 'dist/index.cjs.js',
        format: 'cjs'
      }
    ]
  },
  {
    input: 'main.js',
    output: [
      {
        file: 'dist/main.es.js',
        format: 'es'
      },
      {
        file: 'dist/main.cjs.js',
        format: 'cjs'
      }
    ]
  }
]
