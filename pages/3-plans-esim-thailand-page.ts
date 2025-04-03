import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

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
    async checkPlanValues(country: String, dataVolume: string, valid: string, plan_type: string, price: string) {
        
            
        //check data of plan - Country: Thailand
        const locator = this.page.locator('.country');
        await expect(locator).toContainText(country);
        //check data of plan -  Data: 5GB
        const locator = this.page.locator('.data');
        await expect(locator).toContainText(dataVolume);
        //check data of plan - Valid: 30 days
        const locator = this.page.locator('.valid');
        await expect(locator).toContainText(valid);
        //check data of plan - Plan type: data only
        const locator = this.page.locator('.plan-type');
        await expect(locator).toContainText(plan_type);
        //check data of plan - Price 11,79 €
        const locator = this.page.locator('.price');
        await expect(locator).toContainText(price);
    }
}
