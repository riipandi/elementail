module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@elementail/eslint-config`
  extends: ["elementail"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
