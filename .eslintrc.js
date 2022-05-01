export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    "react": {
      "version": "detect"
    }
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["react", "import", "jsx-a11y", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      configFile: "./babel.config.json",
    },

  },
  parser: '@babel/eslint-parser',
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "no-var": "warn",
    "no-console": 0,
    "no-import-assign": 0,
    "no-dupe-else-if": 0,
    "no-setter-return": 0,
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-undef": "off",
    "prefer-arrow-callback": "warn",
    "prefer-rest-params": "warn",
  },
};
