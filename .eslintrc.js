module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  env: {
    es6: true,
    node: true
  },
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "no-console": "off"
  }
};