import { GetStarted } from '../pages/GetStarted';
import { test, expect } from '@playwright/test';

test('Get Started page should have all the expected links', async ({ page }) => {
    const getStartedPage = new GetStarted(page);
    await page.goto('https://rds-storybook.azurewebsites.net/?path=/docs/get-started--docs');

    // Check if all the expected links are visible
    await expect(getStartedPage.getStarted).toBeVisible();
    await expect(getStartedPage.coreConcepts).toBeVisible();
    await expect(getStartedPage.migrationGuide).toBeVisible();
    await expect(getStartedPage.support).toBeVisible();
    await expect(getStartedPage.communityContributions).toBeVisible();
})