module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jquery": true,
    "es6": true,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
  },
  "rules": {
    "max-len": [1, 180, 2, { ignoreComments: true }]
  },
  "extends": ["airbnb-base"],
};
