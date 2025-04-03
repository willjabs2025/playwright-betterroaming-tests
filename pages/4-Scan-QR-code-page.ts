import type { Page } from 'playwright';
import { expect } from 'playwright/test';

export class ScanQRCodePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async CheckTextScanQRcodetogetyourFREEeSIMnowExists() {
        //Check text "Scan QR code to get your FREE eSIM now!" exists
        //await expect(this.page.getByText('Scan QR code to get your FREE eSIM now!')).toBeVisible();
        //
        // wait for the page to load
        await this.page.waitForTimeout(2000);
        await expect(this.page.getByRole('heading')).toContainText('Scan QR code to get your FREE eSIM now!');
    }
}
