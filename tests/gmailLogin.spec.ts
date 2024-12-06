import { test } from '@playwright/test';
import { GmailLoginPage } from '../pageObjects/GmailLoginPage';

test.describe('Teste de Login no Gmail Workspace', () => {
  const email = 'd2017014103@unifei.edu.br';
  const password = '#Moreir@1698';

  test('Teste 1: Acessar página inicial e clicar em "Fazer login"', async ({ page }) => {
    const gmailLoginPage = new GmailLoginPage(page);
    await gmailLoginPage.navigateToGmailWorkspace();
   // await gmailLoginPage.clickLoginButton();
  });

 /*test('Teste 2: Preencher e-mail, senha e efetuar login', async ({ page }) => {
    const gmailLoginPage = new GmailLoginPage(page);

    // Realiza login
    await gmailLoginPage.login(email, password);
  });*/
});