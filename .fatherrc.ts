export default {
  esm: {
    type: 'rollup',
    file: 'index.esm',
    minify: true
  },
  cjs: {
    type: 'rollup',
    file: 'index.cjs',
    minify: true
  },
  autoprefixer: {},
  cssModules: true,
};
