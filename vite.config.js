import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src', // Make sure this points to the correct source directory
  build: {
    outDir: '../dist' // Adjust as needed
  }
});
