import type { Page } from 'playwright';

export class SettingsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async CheckTextScanQRcodetogetyourFREEeSIMnowExists!() {
        //await this.page.click('.btn-outline-danger');
        //Scan QR code to get your FREE eSIM now!
    }
}
