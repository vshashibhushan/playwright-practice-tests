import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://rds-storybook.azurewebsites.net/?path=/docs/get-started--docs');
})

test('has title', async ({ page }) => {    
    await expect(page).toHaveTitle(/Get Started - Docs ⋅ Storybook/);
});

test('get started link', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Core Concepts' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Migration Guide' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Support' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Community Contributions' })).toBeVisible();
})







