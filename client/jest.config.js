module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.js"],
  transformIgnorePatterns: ["/node_modules/(?!vee-validate/dist/rules)"],
}
