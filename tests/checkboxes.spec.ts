import { test, expect } from '@playwright/test';

test('working with checkboxes', async ({ page }) => {
    await page.goto('https://rds-storybook.azurewebsites.net/?path=/story/components-checkbox-group--default');
   
    await page.frameLocator('#storybook-preview-iframe').locator("//rds-checkbox-group[@name='checkbox-group-1']/rds-checkbox")
        .first().click();

    await page.waitForTimeout(2000);

    await expect(page.frameLocator('#storybook-preview-iframe').locator("//rds-checkbox-group[@name='checkbox-group-1']/rds-checkbox").first())
        .toHaveAttribute('checked');

        await page.frameLocator('#storybook-preview-iframe').locator("//rds-checkbox-group[@name='checkbox-group-1']/rds-checkbox").nth(1).click();
    await page.waitForTimeout(2000);

    await expect(page.frameLocator('#storybook-preview-iframe').locator("//rds-checkbox-group[@name='checkbox-group-1']/rds-checkbox").nth(1))
        .toHaveAttribute('checked');
        
});