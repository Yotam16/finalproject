import { defineConfig } from 'vite';

export default defineConfig({

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],

  },

  build: {
    rollupOptions: {
      input: '/src/main.tsx'
    }}  

});
