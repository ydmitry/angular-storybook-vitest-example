/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const { default: angular } = await import('@analogjs/vite-plugin-angular');

  return {
    plugins: [angular()],
    test: {
      globals: true,
      setupFiles: ['src/test-setup.ts'],
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
    }
  };
});
