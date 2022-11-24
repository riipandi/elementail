module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-elementail`
  extends: ["elementail"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
