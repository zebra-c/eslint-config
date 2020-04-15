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
