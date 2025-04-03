import type { Page } from 'playwright';
import { expect } from 'playwright/test';

export class LanguageCurrencyPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectCurrency(currency: string) {
        //
        //await this.page.click('text[type="'+currency+'"]');
        //
        await this.page.getByText('$', { exact: true }).click();
        await expect(this.page.getByRole('dialog')).toContainText('Euro - €');
        await this.page.getByText('Euro - €').click();
        await expect(this.page.getByRole('banner')).toContainText('€');
    }
}
