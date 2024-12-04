import { test, expect } from '@playwright/test';

test('verificar título da página', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
