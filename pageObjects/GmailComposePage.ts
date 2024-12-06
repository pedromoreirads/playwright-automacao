// pageObjects/GmailComposePage.ts

export class GmailComposePage {
  page: any;
  composeButton: string;
  recipientInput: string;
  subjectInput: string;
  bodyInput: string;
  sendButton: string;

  constructor(page: any) {
    this.page = page;
    this.composeButton = 'div[aria-label="Criar mensagem"]';
    this.recipientInput = 'textarea[name="to"]';
    this.subjectInput = 'input[name="subjectbox"]';
    this.bodyInput = 'div[aria-label="Corpo da mensagem"]';
    this.sendButton = 'div[aria-label="Enviar ‪(Ctrl-Enter)‬"]';
  }

  async composeAndSendEmail(to: string, subject: string, body: string) {
    await this.page.click(this.composeButton);
    await this.page.fill(this.recipientInput, to);
    await this.page.fill(this.subjectInput, subject);
    await this.page.fill(this.bodyInput, body);
    await this.page.click(this.sendButton);
  }
}
