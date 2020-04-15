/** @format */
module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  printWidth: 80,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
          parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
          parser: 'html',
      },
    },
  ],
};
