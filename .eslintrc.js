module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  extends: "eslint:recommended",
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {},
  overrides: [
    // node files
    {
      files: [
        ".eslintrc.js",
        ".template-lintrc.js",
        "ember-cli-build.js",
        "index.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "tests/dummy/config/**/*.js",
        "node-tests/**/*.js",
      ],
      excludedFiles: [
        "addon/**",
        "addon-test-support/**",
        "app/**",
        "tests/dummy/app/**",
      ],
      parserOptions: {
        sourceType: "script",
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ["node"],
      extends: ["plugin:node/recommended"],
    },
    {
      // test files
      files: ["tests/**/*-test.{js,ts}"],
      extends: ["plugin:jest/recommended"],
    },
  ],
};
