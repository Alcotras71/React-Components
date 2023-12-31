module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
        browser: true,
        es6: true,
        jest: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks'],
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 'off',
    "no-await-in-loop": "off",
    '@typescript-eslint/no-explicit-any': 'error',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    "@typescript-eslint/explicit-function-return-type": "error",
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  ignorePatterns: ['**/.eslintignore'],
};
