module.exports = {
  transform: {
    '\\.ts$': 'ts-jest'
  },
  testRegex: '\\.test\\.ts$',
  collectCoverageFrom: ['src/**/*.ts'],
  moduleFileExtensions: ['ts', 'js']
}
