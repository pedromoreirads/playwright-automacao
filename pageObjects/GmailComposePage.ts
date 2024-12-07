import { Page } from 'playwright';

export class GmailComposePage {
  page: Page;
  private readonly composeButton = `button:has-text("Compor")`; // embora a busca por texto não seja a mais eficiente, não poucas vezes, é a melhor opção
  //abaixo você vê a busca por xpath, que é uma das piores formas de buscar elementos, em termos de performance, mas uma das mais estáveis
  private readonly toInput = `//*[text()='Para']//following::input)[1]`; // sempre use crase para armazenar as strings de locator; isso te poupa de problemas.
  private readonly subjectInput = `//*[@aria-label='Assunto']`;
  private readonly bodyInput = `//*[@aria-label='Corpo da Mensagem']`;
  private readonly sendButton = `(//*[contains(@aria-label, 'Enviar')])[last()]`;

  constructor(page: Page) {
    this.page = page;
  }

  private async elementFromXpath(locator: string) {
    return this.page.locator(`xpath=${locator}`);
  }

  async clickOnComposeButton(){
    await (await this.elementFromXpath(this.composeButton)).click();
  }

  async fillTo(to: string){
    await (await this.elementFromXpath(this.toInput)).fill(to);
  }

  async fillSubject(subject: string){
    await (await this.elementFromXpath(this.subjectInput)).fill(subject);
  }

  async fillBody(body: string){
    await (await this.elementFromXpath(this.bodyInput)).fill(body);
  }

  async clickOnSendButton(){
    await (await this.elementFromXpath(this.sendButton)).click();
  }

  async composeEmail(to: string, subject: string, body: string){
    await this.clickOnComposeButton();
    await this.fillTo(to);
    await this.fillSubject(subject);
    await this.fillBody(body);
    await this.clickOnSendButton();
  }
  
}
