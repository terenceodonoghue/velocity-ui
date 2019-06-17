module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/index.*', '!**/*.{fixtures,stories}.{js,jsx}'],
  setupFilesAfterEnv: ['<rootDir>.jest/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
};
