import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__',
  },
  resolve: {
    alias: {
      '@/images': path.resolve(__dirname, 'src/assets/images/'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/context': path.resolve(__dirname, 'src/context'),
      '@/lib': path.resolve(__dirname, 'src/lib'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
});
