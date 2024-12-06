// tests/gmailLogin.spec.ts
import { test, expect } from '@playwright/test';
import { GmailLoginPage } from '../pageObjects/GmailLoginPage';

test('preencher e-mail e senha e clicar em próximo', async ({ page }) => {
  // Criar uma instância da GmailLoginPage
  const gmailLoginPage = new GmailLoginPage(page);

  // Acessa a página de login
  await page.goto('https://accounts.google.com/');

  // Preenche o campo de e-mail e clica no botão "Próxima"
  await gmailLoginPage.fillEmail('ppaulo1698@gmail.com');
  await gmailLoginPage.clickNextButton();

  // Verifica se o campo de senha está visível
  await expect(gmailLoginPage.isPasswordFieldVisible()).toBeTruthy();

  // Preenche o campo de senha e clica no botão "Próxima"
  await gmailLoginPage.fillPassword('123456');
  await gmailLoginPage.clickNextButton();

  // Verifica a URL após o login
  await expect(page).toHaveURL(/.*accounts.google.com/);
});
