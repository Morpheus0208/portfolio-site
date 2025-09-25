// eslint.config.js — ESLint v9 Flat Config

import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwind from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist', 'node_modules', '.vite', '**/*.css.d.ts'],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      import: importPlugin,
      tailwindcss: tailwind,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: 'detect' },
      tailwindcss: {
        callees: ['cn', 'cva'], // autoriser tes helpers à contenir des classes Tailwind
        config: 'tailwind.config.js',
      },
    },
    rules: {
      // --- React ---
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': ['warn', { allowReferrer: true }],

      // --- Hooks ---
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // --- React Fast Refresh (Vite) ---
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // --- Imports ---
      'import/no-unresolved': 'off',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // node builtin
            'external', // deps npm
            'internal', // alias (@atoms, @molecules, ...)
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: '@{atoms,molecules,organisms,templates,data,utils}/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],

      'tailwindcss/no-custom-classname': 'off',

      // --- Qualité générale ---
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-fallthrough': 'error',
    },
  },

  // 4) Accessibilité JSX (règles recommandées)
  {
    rules: {
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-redundant-roles': 'warn',
    },
  },

  // 5) Prettier — doit être le DERNIER pour désactiver les règles en conflit
  prettier,
];
