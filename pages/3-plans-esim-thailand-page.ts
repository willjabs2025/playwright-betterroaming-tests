import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';
import { expect } from 'playwright/test';

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
    async checkPlanValues(country: string, dataVolume: string, valid: string, plan_type: string, price: string) {
        
            
        //check data of plan - Country: Thailand
        const locatorcountry = this.page.locator('.country');
        await expect(locatorcountry).toContainText(country);
        //check data of plan -  Data: 5GB
        const locatordataVolume = this.page.locator('.data');
        await expect(locatordataVolume).toContainText(dataVolume);
        //check data of plan - Valid: 30 days
        const locatorvalid = this.page.locator('.valid');
        await expect(locatorvalid).toContainText(valid);
        //check data of plan - Plan type: data only
        const locatorplan_type = this.page.locator('.plan-type');
        await expect(locatorplan_type).toContainText(plan_type);
        //check data of plan - Price 11,79 €
        const locatorprice = this.page.locator('.price');
        await expect(locatorprice).toContainText(price);

        // wait for the page to load
        await this.page.waitForTimeout(2000);
        await expect(this.page.getByRole('main')).toContainText('Thailand');
        await expect(this.page.getByRole('main')).toContainText('Countries');
        await expect(this.page.getByRole('main')).toContainText('Thailand');
        await expect(this.page.getByRole('main')).toContainText('Data');
        await expect(this.page.getByRole('main')).toContainText('5 GB');
        await expect(this.page.getByRole('main')).toContainText('Valid');
        await expect(this.page.getByRole('main')).toContainText('30 DAYS');
        await expect(this.page.getByRole('main')).toContainText('Plan type');
        await expect(this.page.getByRole('main')).toContainText('Data only');
        await expect(this.page.getByRole('main')).toContainText('€10.99');
        // wait for the page to load (is testing so fast)
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Access Plan').nth(2).click();
    }
}
