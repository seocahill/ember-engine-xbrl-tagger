/* eslint-env node */

module.exports = {
  useBabelInstrumenter: true,
  coverageEnvVar: 'COVERAGE',
  reporters: ['lcov', 'html'],
  coverageFolder: 'coverage'
}