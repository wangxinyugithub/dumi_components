export default {
  esm: 'rollup',
  cjs: 'rollup',
  autoprefixer: {},
  cssModules: true,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
