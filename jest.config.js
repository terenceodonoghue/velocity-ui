module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/index.*', '!**/*.stories.{js,jsx}'],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  snapshotSerializers: ['jest-emotion'],
};
