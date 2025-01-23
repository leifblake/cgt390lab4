import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cgt390lab4/', // Ensure this matches your GitHub repository name
  plugins: [react()],
});
