import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // Isso faz o navegador ser visível durante a execução dos testes
  },
});
