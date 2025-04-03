import type { Page } from 'playwright';

//check isVisible function
export async function isVisible(page: Page, locator: string): Promise<boolean> {
    await page.waitForSelector(locator);
    return await page.isVisible(locator);
}
//take screenshot function
export async function takeScreenshot(page: Page, name: string) {
    await page.screenshot({ path: `screenshots/${name}.png` });
}
