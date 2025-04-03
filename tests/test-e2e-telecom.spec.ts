import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.betterroaming.com/');
  await expect(page.getByTestId('uc-heading-title')).toContainText('Cookies provide you with a personalised experience');
  await expect(page.getByTestId('uc-accept-all-button')).toContainText('Accept All');
  await page.getByTestId('uc-accept-all-button').click();
  await expect(page.getByRole('banner')).toContainText('$');
  await page.getByText('$', { exact: true }).click();
  await expect(page.getByRole('dialog')).toContainText('Euro - €');
  await page.getByText('Euro - €').click();
  await expect(page.getByRole('banner')).toContainText('€');
  await expect(page.getByRole('main')).toContainText('Thailand');
  await page.getByRole('link', { name: 'esim-thailand Thailand' }).click();
  // wait for the page to load
  await page.waitForTimeout(2000);
  await expect(page.getByRole('main')).toContainText('Thailand');
  await expect(page.getByRole('main')).toContainText('Countries');
  await expect(page.getByRole('main')).toContainText('Thailand');
  await expect(page.getByRole('main')).toContainText('Data');
  await expect(page.getByRole('main')).toContainText('5 GB');
  await expect(page.getByRole('main')).toContainText('Valid');
  await expect(page.getByRole('main')).toContainText('30 DAYS');
  await expect(page.getByRole('main')).toContainText('Plan type');
  await expect(page.getByRole('main')).toContainText('Data only');
  await expect(page.getByRole('main')).toContainText('€10.99');
   // wait for the page to load (is testing so fast)
   await page.waitForTimeout(1000);
  await page.getByText('Access Plan').nth(2).click();
   // wait for the page to load
  await page.waitForTimeout(2000);
  await expect(page.getByRole('heading')).toContainText('Scan QR code to get your FREE eSIM now!');
});