module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    // enforce or disallow variable initializations at definition
    "init-declarations": "off",

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-catch-shadow": "off",

    // disallow deletion of variables
    "no-delete-var": "error",

    // disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    "no-label-var": "error",

    // disallow specific globals
    "no-restricted-globals": "off",

    // disallow declaration of variables already declared in the outer scope
    "no-shadow": "error",

    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "error",

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": "error",

    // disallow use of undefined when initializing variables
    "no-undef-init": "error",

    // disallow use of undefined variable
    // TODO: enable?
    "no-undefined": "off",

    // disallow declaration of variables that are not used in the code
    "no-unused-vars": ["error", { vars: "local", args: "after-used" }],

    // disallow use of variables before they are defined
    "no-use-before-define": "error",

    // enforce return after a callback
    "callback-return": "off",

    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    "global-require": "error",

    // enforces error handling in callbacks (node environment)
    "handle-callback-err": "off",

    // disallow mixing regular variable and require declarations
    "no-mixed-requires": ["off", false],

    // disallow use of new operator with the require function
    "no-new-require": "error",

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    "no-path-concat": "error",

    // disallow use of process.env
    "no-process-env": "off",

    // disallow process.exit()
    "no-process-exit": "off",

    // restrict usage of specified node modules
    "no-restricted-modules": "off",

    // disallow use of synchronous methods (off by default)
    "no-sync": "off"
  }
};
