"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var eslintFolder = path.join(path.dirname(require.resolve('eslint')), '..');
var moduleResolverPath = path.join(eslintFolder, 'lib/shared/relative-module-resolver');
var ModuleResolver = require(moduleResolverPath);
ModuleResolver.resolve = function (moduleName) {
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
