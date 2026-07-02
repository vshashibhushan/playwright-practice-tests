import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rds-storybook.azurewebsites.net/?path=/story/components-combobox--default');
//   await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByRole('textbox').click();
//   await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByText('Alabama').click();
//   await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByRole('textbox').click();
//   await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().locator('div').filter({ hasText: /^Alaska$/ }).click();
  await page.getByRole('link', { name: 'Multiple' }).click();
  await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByRole('textbox').click();
  await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByText('Alaska').click();
  await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByText('Arizona').click();
  await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByText('Colorado').click();

  await expect(page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByRole('textbox'))
    .toHaveText(['Alaska', 'Arizona', 'Colorado']);
});