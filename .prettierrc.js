module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  root: true,
  parser: 'hermes-eslint',
  plugins: [
    'ft-flow'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ft-flow/recommended',
    'prettier',
  ],
};
