module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  env: {
    es6: true,
    node: true
  },
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }, { "tabWidth": 2 }, { "trailingComma": "es5" }],
    "no-console": "off",
    "no-param-reassign": "off",
    "comma-dangle": ["error", "always"]
  }
};