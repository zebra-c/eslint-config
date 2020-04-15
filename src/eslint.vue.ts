/** @format */

import * as path from 'path';

const eslintFolder = path.join(path.dirname(require.resolve('eslint')), '..');

const moduleResolverPath = path.join(eslintFolder, 'lib/shared/relative-module-resolver');
const ModuleResolver = require(moduleResolverPath);

ModuleResolver.resolve = function (moduleName: string) {
  return require.resolve(moduleName);
};

module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/prettier'
  ],
  env: {
    node: true
  },
  rules: {
    camelcase: 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
