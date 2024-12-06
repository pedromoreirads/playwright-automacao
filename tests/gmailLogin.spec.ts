import { test, expect } from '@playwright/test';
import { GmailLoginPage } from '../pageObjects/GmailLoginPage';

test.describe('Rotina de Login no Gmail', () => {
  let gmailLoginPage: GmailLoginPage;

  test.beforeEach(async ({ page }) => {
    // Instanciar a página de login
    gmailLoginPage = new GmailLoginPage(page);
    await page.goto('https://accounts.google.com/');
  });

  test('Teste 1: Preencher o campo de e-mail e clicar em próximo', async ({ page }) => {
    // Preencher o campo de e-mail
    await gmailLoginPage.fillEmail('d2017014103@unifei.edu.br');
    await gmailLoginPage.clickNextButton();

    // Verificar se o campo de senha aparece
    await expect(gmailLoginPage.isPasswordFieldVisible()).toBeTruthy();
  });

  test('Teste 2: Preencher o campo de senha e clicar em próximo', async ({ page }) => {
    // Simular o preenchimento do campo de e-mail antes
    await gmailLoginPage.fillEmail('d2017014103@unifei.edu.br');
    await gmailLoginPage.clickNextButton();

    // Preencher o campo de senha
    await gmailLoginPage.fillPassword('#Moreir@1698');
    await gmailLoginPage.clickNextButton();

    // Verificar a URL após login (geralmente contém "accounts.google.com")
    await expect(page).toHaveURL(/.*accounts.google.com.*/);
  });
});
