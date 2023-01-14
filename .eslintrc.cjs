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
    node: 1
  },
  rules: {
    semi: "off",
    "arrow-parens": "off",
    "comma-dangle": "off",
    "require-jsdoc": "off",
    'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
    "eol-last": 0,
    "object-curly-spacing": ["error", "always"],
    "no-trailing-spaces": ["error", {
      "skipBlankLines": true
    }],
    "operator-linebreak": "off",
    "max-len": "off",
    "indent": "off",
    // "no-unused-vars": ["warn"]
    // "quotes": ["error", "double",{ "avoidEscape": true }]
  },
  extends: "google",
}