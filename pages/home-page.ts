import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://www.betterroaming.com/');
    }
    // 2. Select Euro as currency
    async selectEuroAsCurrency() {
        await this.page.click('a[routerlink="/login"]');
    }
    /*
    async userIsLoggedIn(): Promise<boolean> {
        return await isVisible(this.page, 'a[routerlink="/editor"]');
    } 
    */
    //3. Click on Thailand
    async fillAndSelectCountry() {
        //await this.page.type('input[formcontrolname="email"]', email);
        await this.page.type('input[xpath="/html/body/main/div[3]/div/astro-island/div/section/div/div[1]/div/div[1]/div/input"]', "Thailand");
    }
}
