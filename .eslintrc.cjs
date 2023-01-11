module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    extensions: ['js']
  },
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  rules: {
    semi: "off",
    "arrow-parens": "off",
    "comma-dangle": "off",
    "require-jsdoc": "off",
    'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  },
  extends: "google",
}