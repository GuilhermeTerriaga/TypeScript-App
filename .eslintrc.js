module.exports = {
  env: {
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
     project: '/home/guilherme/Documents/Estudos/cursoTypeScript/api_ts/tsconfig.json'
  },
  extends: [
    'airbnb-typescript',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcalse: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    "no-underscore-dangle": 'off',
  },
};
