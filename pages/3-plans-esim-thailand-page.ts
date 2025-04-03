import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class LogoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async userIsOnPlanPage(): Promise<boolean> {
        return isVisible(this.page, 'div[xpath="/html/body/main/div[3]/div/astro-island/div/section/div/div[3]/div[1]/div[1]/p"]');
    }
}
