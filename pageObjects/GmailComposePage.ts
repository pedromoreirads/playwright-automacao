import { Page } from 'playwright';

export class GmailComposePage {
  private page: Page;
  private composeButton = '.T-I.T-I-KE.L3';
  private toInput = '.oj .vO';
  private subjectInput = '.aoT';
  private bodyInput = '.Am.Al.editable.LW-avf.tS-tW';
  private sendButton = '.T-I.J-J5-Ji.aoO.T-I-atl.L3';

  constructor(page: Page) {
    this.page = page;
  }

  async composeEmail(to: string, subject: string, body: string) {
    // Aguardar o botão de composição estar visível
    await this.page.waitForSelector(this.composeButton, { timeout: 60000 });
    await this.page.click(this.composeButton);

    // Aguardar o campo "Para" estar visível
    await this.page.waitForSelector(this.toInput, { timeout: 60000 });
    await this.page.fill(this.toInput, to);

    // Preencher o assunto e corpo do e-mail
    await this.page.fill(this.subjectInput, subject);
    await this.page.fill(this.bodyInput, body);

    // Enviar o e-mail
    await this.page.click(this.sendButton);
  }
}
