import { test, expect } from '@playwright/test';

test('Deve abrir a página do Gmail', async ({ page }) => {
  // Navegar até a página do Gmail
  await page.goto('https://mail.google.com');
  
  // Verificar se o título da página está correto
  await expect(page).toHaveTitle(/Gmail/);
});
