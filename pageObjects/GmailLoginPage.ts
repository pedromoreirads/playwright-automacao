import { Page } from '@playwright/test';

export class GmailLoginPage {
  private page: Page;
  private emailInput = 'input[type="email"]'; // Seletor do campo de email

  constructor(page: Page) {
    this.page = page;
  }

  // Navegar até a página de login do Gmail
  async navigateToGmail() {
    await this.page.goto('https://mail.google.com');
  }
}
