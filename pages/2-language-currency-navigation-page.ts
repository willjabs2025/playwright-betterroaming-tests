import type { Page } from 'playwright';

export class LanguageCurrencyPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectCurrency(currency: string) {
        //await this.page.type('input[formcontrolname="email"]', email);
        //await this.page.type('input[formcontrolname="password"]', password);
        await this.page.click('text[type="'+currency+'"]');
    }
}
