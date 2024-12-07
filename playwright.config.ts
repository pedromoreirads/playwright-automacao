// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 9000, // 30 segundos para cada teste
  expect: {timeout: 2000},
  testDir: 'tests',
  fullyParallel: true,
  retries: 1,
  use: {
    browserName: 'chromium',
  },
});
