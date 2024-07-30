module.exports = {
    roots: ['<rootDir>/tests'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.ts',
      '!<rootDir>/src/main/**',
      '!<rootDir>/src/**/index.ts',
      '!<rootDir>/src/**/*.protocols.ts',
      '!<rootDir>/src/**/*.interface.ts',
      '!<rootDir>/src/**/*testHelpers.ts'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
      '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
      '@/tests/(.*)': '<rootDir>/tests/$1',
      '@/(.*)': '<rootDir>/src/$1'
    }
  };
  