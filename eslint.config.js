import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default defineConfig([
    eslint.configs.recommended, // Base JS rules
    prettier, // Disables all ESLint rules that conflict with Prettier
    {
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.node,
            },
        },
    },
]);
