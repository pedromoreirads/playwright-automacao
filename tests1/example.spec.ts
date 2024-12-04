import { test, expect } from '@playwright/test';

test('Deve realizar login com sucesso', async ({ page }) => {
  await page.goto('https://example.com/login');
  
  // Tirar uma screenshot da página antes de preencher o formulário
  await page.screenshot({ path: 'screenshot-antes-login.png' });

  await page.fill('input[name="username"]', 'seu_usuario');
  await page.fill('input[name="password"]', 'sua_senha');
  await page.click('button[type="submit"]');
  
  // Esperar pela página inicial após o login
  await expect(page).toHaveURL('https://example.com/dashboard');
  await expect(page.locator('h1')).toHaveText('Bem-vindo ao Dashboard');

  // Tirar uma screenshot após o login ser concluído
  await page.screenshot({ path: 'screenshot-depois-login.png' });
});
