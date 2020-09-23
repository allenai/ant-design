const { moduleNameMapper, transformIgnorePatterns } = require('./.jest');

// jest config for server render environment
module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'md'],
  moduleNameMapper,
  transform: {
    '\\.tsx?$': './vendor/antd-tools/lib/jest/codePreprocessor',
    '\\.js$': './vendor/antd-tools/lib/jest/codePreprocessor',
    '\\.md$': './vendor/antd-tools/lib/jest/demoPreprocessor',
    '\\.(jpg|png|gif|svg)$': './vendor/antd-tools/lib/jest/imagePreprocessor',
  },
  testRegex: 'check-site\\.js$',
  testEnvironment: 'node',
  transformIgnorePatterns,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.test.json',
    },
  },
};
