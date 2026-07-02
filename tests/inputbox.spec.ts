import { test, expect } from '@playwright/test';



test('test', async ({ page }) => {
  await page.goto('https://rds-storybook.azurewebsites.net/?path=/story/components-input--default');
  await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByRole('textbox', { name: 'Label text' }).click();
  await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByRole('textbox', { name: 'Label text' }).fill('testing input box');
  

  
  await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByRole('textbox', { name: 'Label text' }).focus();
  const element = page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByRole('textbox', { name: 'Label text' })
  const borderColor = await element.evaluate((el) => {
  return window.getComputedStyle(el).getPropertyValue('--tw-ring-color');
  });

  console.log('Border color:', borderColor);
  
});