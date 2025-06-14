import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/home-work-42/', // Путь репозитория на GitHub Pages
  server: {
    historyApiFallback: true, // Для локальной разработки
  },
});