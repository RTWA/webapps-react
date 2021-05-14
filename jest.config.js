module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/"
    ],
    moduleNameMapper: {
        "\\.(css)$": "<rootDir>/__mocks__/styleMock.js"
    }
  }