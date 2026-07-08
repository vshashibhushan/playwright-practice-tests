import type { Locator, Page } from '@playwright/test';

export class GetStarted {
    readonly page: Page
    readonly getStarted: Locator;
    readonly coreConcepts: Locator;
    readonly migrationGuide: Locator;
    readonly support: Locator;
    readonly communityContributions: Locator;

    constructor(page: Page) {

        this.page = page;
        this.getStarted = page.getByRole('link', { name: 'Get Started' });
        this.coreConcepts = page.getByRole('link', { name: 'Core Concepts' });
        this.migrationGuide = page.getByRole('link', { name: 'Migration Guide' });
        this.support = page.getByRole('link', { name: 'Support' });
        this.communityContributions = page.getByRole('link', { name: 'Community Contributions' });
    }
} 
