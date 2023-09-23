/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  testRegex: ".*\\.(test|spec)\\.ts$",
  coveragePathIgnorePatterns: [
    "/dist/",
    "/test/",
    "/node_modules/",
    "/.eslintrc\\.js",
    "/src/index\\.ts"
  ],
};