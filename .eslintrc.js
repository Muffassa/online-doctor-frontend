module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'no-return-await': 0,
  },
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
};
