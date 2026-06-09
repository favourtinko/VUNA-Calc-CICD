const js = require('@eslint/js');
module.exports = [
  { ignores: ['dist/', 'coverage/', 'node_modules/', 'assets/js/bootstrap.min.js', 'assets/css/'] },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        window: 'readonly', document: 'readonly', localStorage: 'readonly',
        alert: 'readonly', confirm: 'readonly', fetch: 'readonly',
        navigator: 'readonly', setTimeout: 'readonly', clearTimeout: 'readonly',
        SpeechSynthesisUtterance: 'readonly', speechSynthesis: 'readonly',
        module: 'writable', require: 'readonly', process: 'readonly',
        __dirname: 'readonly', console: 'readonly',
        describe: 'readonly', it: 'readonly', expect: 'readonly',
        evaluateExpression: 'readonly', currentExpression: 'writable',
        convertToWords: 'readonly', result: 'writable',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'eqeqeq': 'error',
      'semi': ['error', 'always'],
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: { console: 'readonly' },
    },
  },
];