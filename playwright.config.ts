// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000, // 60 segundos para cada teste
  use: {
    browserName: 'webkit',
  },
});
