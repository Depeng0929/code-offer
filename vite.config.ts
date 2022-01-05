/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    testTimeout: 2000,
    // threads: false,
    setupFiles: [
      './test/index.ts',
    ],
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})