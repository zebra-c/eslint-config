# @zebra-c/eslint-config

> 支持 vue、react umi

## 安装

```
npm install @zebra-c/eslint-config -D
```

## Vue

### .eslintrc.js

Add to your eslint config (`.eslintrc.js`):

```js
module.exports = {
  extends: [require.resolve("@zebra-c/eslint-config/dist/eslint.vue")]
};
```

### .prettierrc.js

```js
const fabric = require("@zebra-c/eslint-config");

module.exports = {
  ...fabric.prettier
};
```

## React Umi

### .eslintrc.js

```js
module.exports = {
  extends: [require.resolve("@zebra-c/eslint-config/dist/eslint.umi")]
};
```

### .prettierrc.js

```js
const fabric = require("@zebra-c/eslint-config");

module.exports = {
  ...fabric.prettier
};
```

## .prettierignore

```
**/*.svg
package.json
.umi
.umi-production
/dist
.dockerignore
.DS_Store
.eslintignore
*.png
*.toml
docker
.editorconfig
Dockerfile*
.gitignore
.prettierignore
LICENSE
.eslintcache
*.lock
yarn-error.log
.history

./src/styles/icons/**
.env
.env.local
**.sh

```

## .eslintignore

```
/lambda/
/scripts
/config
.history
/src/styles/icons/
/static/
.stylelintrc.js
.prettierrc.js
.config/config.ts
```

## .editorconfig

```
# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.gradle]
indent_size = 4

[BUCK]
indent_size = 4
```
