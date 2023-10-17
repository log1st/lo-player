module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
    settings: {
        "import/resolver": {
            vite: {
                configPath: './vite.config.ts'
            }
        }
    },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
      'react/react-in-jsx-scope': [0],
      'react/jsx-filename-extension': [0],
      'import/prefer-default-export': [0],
      'import/extensions': [0],
      'import/no-unresolved': [0],
    'no-nested-ternary': [0],
    'no-bitwise': [0],
    'react/require-default-props': [0]
  },
}
