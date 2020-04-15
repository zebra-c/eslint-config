/** @format */

import * as path from 'path';

const eslintFolder = path.join(path.dirname(require.resolve('eslint')), '..');

const moduleResolverPath = path.join(eslintFolder, 'lib/shared/relative-module-resolver');
const ModuleResolver = require(moduleResolverPath);

ModuleResolver.resolve = function (moduleName: string) {
  return require.resolve(moduleName);
};

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  rules: {
    'no-param-reassign': 0,
    'no-console': 'off',
    camelcase: 'off',
    'react/no-array-index-key': 0,
    'no-bitwise': 0,
    'array-callback-return': 0,
    'no-useless-escape': 0,
    '@typescript-eslint/camelcase': 0,
  },
};
