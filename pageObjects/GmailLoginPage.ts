import { Page } from '@playwright/test';

export class GmailLoginPage{
  page: Page;
  private readonly emailField = 'input[type="email"]';
  private readonly nextButton = 'button:has-text("Next")'; // Versão em inglês do botão
  private readonly passwordField = 'input[type="password"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  // Método para preencher o e-mail
  async fillEmail(email: string) {
    await this.page.fill(this.emailField, email);
  }

  // Método para clicar no botão "Próximo"
  async clickNextButton() {
    await this.page.waitForSelector(this.nextButton, { state: 'visible' });
    await this.page.click(this.nextButton);
  }

  // Método para preencher a senha
  async fillPassword(password: string) {
    await this.page.fill(this.passwordField, password);
  }

  // Método para verificar se o campo de senha está visível
  async isPasswordFieldVisible() {
    return await this.page.isVisible(this.passwordField);
  }
}
