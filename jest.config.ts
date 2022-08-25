export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@components': '<rootDir>/src/components',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  testMatch: ['<rootDir>/src/**/*.test.{tsx,ts}'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
};
