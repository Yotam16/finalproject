import { defineConfig } from 'vite';


export default defineConfig({
  test: {
    bail: 1,
    testTimeout: 15000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': '/src', 
    },
  
}});