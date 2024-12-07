import { test as baseTest, Browser, Page } from '@playwright/test';
import { GmailLoginPage } from '../../pageObjects/GmailLoginPage';
import { GmailComposePage } from '../../pageObjects/GmailComposePage';

const test = baseTest.extend<{
  gmailLoginPage: GmailLoginPage;
  gmailComposePage: GmailComposePage;
}>({
  gmailLoginPage: async ({ page }, use) =>  await use(new GmailLoginPage(page)),
  gmailComposePage: async ({ page }, use) => await use(new GmailComposePage(page)),
});

export { test };
