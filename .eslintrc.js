module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  ignorePatterns: ['node_modules/', 'apps/', 'tests/', '.pnpm-store/'],
};
