import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';
import { expect } from 'playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    //  1. Open the page
    async open() {
        await this.page.goto('https://www.betterroaming.com/');
    }
    // check if is opened
    async checkIfHomePageIsOpened() {
        //await this.page.('https://www.betterroaming.com/');
    }

    // 2. Select Euro as currency
    async selectEuroAsCurrency() {
        // Check if elements exists
        await expect(this.page.getByText('€')).toBeVisible();
        // Click Currency
        await this.page.click('div[xpath="/html/body/div[1]/header/div[1]/div[3]/div[2]/astro-island/div/div/div[2]/div/div[2]"]');
        // Select Euro
        await this.page.click('div[xpath="/html/body/div[4]/div[3]/div/div[3]/div[2]"]');
        
    }
    /*
    async userIsLoggedIn(): Promise<boolean> {
        return await isVisible(this.page, 'a[routerlink="/editor"]');
    } 
    */
    //3. Click on Thailand
    async fillAndSelectCountry(country: string) {
        //await this.page.type('input[formcontrolname="email"]', email);
        await this.page.type('input[xpath="/html/body/main/div[3]/div/astro-island/div/section/div/div[1]/div/div[1]/div/input"]', country);
    }
}
