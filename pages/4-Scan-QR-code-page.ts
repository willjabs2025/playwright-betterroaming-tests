import type { Page } from 'playwright';

export class SettingsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async CheckTextScanQRcodetogetyourFREEeSIMnowExists!() {
        //Check text "Scan QR code to get your FREE eSIM now!" exists
        await expect(this.page.getByText('Scan QR code to get your FREE eSIM now!')).toBeVisible();
    }
}
