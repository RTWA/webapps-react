module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/"
    ],
    moduleNameMapper: {
        "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
        "react-markdown": "<rootDir>/__mocks__/react-markdown.js",
        "remark-*": "<rootDir>/__mocks__/remark-plugin.js"
    },
    transformIgnorePatterns: [
      "node_modules/(?!react-markdown)"
    ]
  }