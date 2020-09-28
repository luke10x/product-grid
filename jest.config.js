module.exports = {
  rootDir: "./components",
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)(spec|test).ts?(x)'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions:['ts', 'js'],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  } 
}
