import { Page } from '@playwright/test';

export class GmailLoginPage {
  private page: Page;
  private loginButtonSelector: string = 'a:has-text("Fazer login")'; // Botão "Fazer login"
  private emailInputSelector: string = 'input[type="email"]'; // Campo "E-mail ou telefone"
  private nextButtonSelector: string = 'button:has-text("Próxima")'; // Botão "Próxima"
  private passwordInputSelector: string = 'input[type="password"]'; // Campo "Senha"

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToGmailWorkspace() {
    await this.page.goto('https://workspace.google.com/intl/pt-BR/gmail/');
  }

/*  async clickLoginButton() {
    // Aguarda e clica no botão "Fazer login"
    await this.page.waitForSelector(this.loginButtonSelector, { state: 'visible', timeout: 120000 });
    await this.page.click(this.loginButtonSelector);
  }

  async login(email: string, password: string) {
    // Aguarda e preenche o campo "E-mail ou telefone"
    await this.page.waitForSelector(this.emailInputSelector, { state: 'visible', timeout: 120000 });
    await this.page.fill(this.emailInputSelector, email);

    // Clica no botão "Próxima"
    await this.page.waitForSelector(this.nextButtonSelector, { state: 'visible', timeout: 120000 });
    await this.page.click(this.nextButtonSelector);

    // Aguarda e preenche o campo "Senha"
    await this.page.waitForSelector(this.passwordInputSelector, { state: 'visible', timeout: 120000 });
    await this.page.fill(this.passwordInputSelector, password);

    // Clica no botão "Próxima" novamente
    await this.page.waitForSelector(this.nextButtonSelector, { state: 'visible', timeout: 120000 });
    await this.page.click(this.nextButtonSelector);
  }*/
}
