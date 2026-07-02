import { test, expect } from '@playwright/test';

test('select component test', async ({ page }) => {
  await page.goto('https://rds-storybook.azurewebsites.net/?path=/story/components-select--default');
  await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByLabel('Label text').selectOption('2');

    await page.waitForTimeout(2000);
  await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByLabel('Label text').selectOption({ label: 'Option 7' });

  await page.waitForTimeout(2000);
  // Test multiple select
  await page.goto('https://rds-storybook.azurewebsites.net/?path=/story/components-select--multiple');
  await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByLabel('Label text').selectOption(['2', '4']);
});