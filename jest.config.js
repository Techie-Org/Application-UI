module.exports = {
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/routes.js',
    '!app/config/**',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '^config': '<rootDir>/app/config/development.js',
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)(\\?as=webp)*$': '<rootDir>/internals/mocks/image.js',
    '^@internals/(.*)': '<rootDir>/internals/$1',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/enzyme-adapter-helper.js',
    // '<rootDir>/internals/testing/test-bundler.js',
  ],
  testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: [],
};
