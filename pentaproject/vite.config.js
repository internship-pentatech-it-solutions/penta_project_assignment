import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), '');

  // Define process.env to make it accessible in your application
  return {
    define: {
      'process.env': env // This exposes all environment variables
    },
    plugins: [react()],
  };
});