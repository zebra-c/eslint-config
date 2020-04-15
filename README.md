# @zebra-c/eslint-config

> 支持 vue、jsx、js、ts、tsx、html

## 安装

```
npm add -D @zebra-c/eslint-config
```

## .eslintrc.js

Add to your eslint config (`.eslintrc.js`):

```js
module.exports = {
  extends: require('@zebra-c/eslint-config/dist/eslint.vue.js'),
}
```

## More

### .eslintignore

```
!.eslintrc.js
!.prettierrc.js
```

### .prettierrc.js

```js
module.exports = {
  ...require('@zebra-c/eslint-config/dist/.prettierrc.js'),
}
```

### .prettierignore

```
**/node_modules/*
```

### .editorconfig

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
