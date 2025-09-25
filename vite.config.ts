import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const isCI = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'portfolio';
const base = isCI ? `/${repo}/` : '/';
export default defineConfig({ base, plugins: [react(), tsconfigPaths()] });
