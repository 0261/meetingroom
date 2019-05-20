module.exports = {
    verbose: true,
    notify: true,
    notifyMode: 'always',
    transform: {
      "^.+\\.ts$": "ts-jest"
    },
    testRegex: '(/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: [
      "ts",
      "js"
    ],
    globals: {
      "ts-jest": {
        "diagnostics": true
      }
    },
    displayName: {
      name: "Zigzag",
      color: 'grey'
  },
}