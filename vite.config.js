// Vite is a next-generation, front-end tool that focuses on speed and performance.

// It consists of two major parts:

// A development server that provides rich feature enhancements over 
//   native ES modules: fast Hot Module Replacement (HMR), pre-bundling, support for typescript, jsx, and dynamic import.
// A build command that bundles your code with Rollup, pre-configured to output optimized static assets for production.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
