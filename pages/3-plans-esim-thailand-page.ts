import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';
//import { mobilePlan } from './testdata';

export class PlanPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    // check user is at correct page
    async userIsOnPlanPage(): Promise<boolean> {
        return isVisible(this.page, 'div[xpath="/html/body/main/div[3]/div/astro-island/div/section/div/div[3]/div[1]/div[1]/p"]');
    }
    // check data of plan
    async checkPlanValues() {
        //check data of plan - Country: Thailand
        const locator = page.locator('.title');
        await expect(locator).toContainText('Thailand');
        //check data of plan -  Data: 5GB
        const locator = page.locator('.title');
        await expect(locator).toContainText('5GB');
        //check data of plan - Valid: 30 days
        const locator = page.locator('.title');
        await expect(locator).toContainText('30 days');
        //check data of plan - Plan type: data only
        const locator = page.locator('.title');
        await expect(locator).toContainText('data only');
        //check data of plan - Price 11,79 €
        const locator = page.locator('.title');
        await expect(locator).toContainText('11,79 €');
    }
}
