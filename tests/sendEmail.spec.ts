import { expect } from '@playwright/test';
import { GmailLoginPage } from '../pageObjects/GmailLoginPage';
import { GmailComposePage } from '../pageObjects/GmailComposePage';
import { test } from './fixtures/testArgsFixture';

test.describe('Rotina de Login no Gmail', () => {
  let gmailLoginPage: GmailLoginPage;

  test.beforeEach(async ({ gmailLoginPage }) => {
    // Instanciar a página de login
    await gmailLoginPage.goto('https://accounts.google.com/');
  });

  test('Teste 1: Preencher o campo de e-mail e clicar em próximo', async ({ gmailLoginPage }) => {
    // Preencher o campo de e-mail
    await gmailLoginPage.fillEmail('testeplaywrigt075@gmail.com');
    await gmailLoginPage.clickNextButton();

    // Verificar se o campo de senha aparece
    expect(gmailLoginPage.isPasswordFieldVisible()).toBeTruthy();
  });

  test('Teste 2: Preencher o campo de senha e clicar em próximo', async ({ gmailLoginPage }) => {
    // Simular o preenchimento do campo de e-mail antes
    await gmailLoginPage.fillEmail('testeplaywrigt075@gmail.com');
    await gmailLoginPage.clickNextButton();

    // Preencher o campo de senha
    await gmailLoginPage.fillPassword('Teste123456');
    await gmailLoginPage.clickNextButton();

    // Verificar a URL após login (geralmente contém "accounts.google.com")
    expect(gmailLoginPage.page).toHaveURL(/.*accounts.google.com.*/);
  });
});

test.describe('Rotina de Envio de E-mail no Gmail', () => {
  let gmailLoginPage: GmailLoginPage;
  let gmailComposePage: GmailComposePage;

  test.beforeEach(async ({ gmailLoginPage, gmailComposePage }) => {
    // Simular o preenchimento do campo de e-mail e senha antes
    await gmailLoginPage.goto('https://accounts.google.com/');
    await gmailLoginPage.fillEmail('d2017014103@unifei.edu.br');
    await gmailLoginPage.clickNextButton();
    await gmailLoginPage.fillPassword('#Moreir@1698');
    await gmailLoginPage.clickNextButton();

    // Navegar para a página de composição de e-mail
    await gmailComposePage.page.goto('https://mail.google.com/mail/u/0/#inbox');
  });

  test('Teste 3: Enviar um e-mail', async ({ gmailComposePage }) => {
    // Enviar um e-mail
    await gmailComposePage.composeEmail('d2017014103@unifei.edu.br', 'Assunto do e-mail', 'Corpo do e-mail');  

    // Verificar se o e-mail foi enviado com sucesso (aguardar 5 segundos)
    await gmailComposePage.page.waitForTimeout(5000);
  });  
});
