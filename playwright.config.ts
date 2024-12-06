// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 15000, // 30 segundos para cada teste
  use: {
    browserName: 'webkit',
  },
});
