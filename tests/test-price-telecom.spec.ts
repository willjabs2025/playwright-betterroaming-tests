import { test, expect } from '@playwright/test';

import { mobilePlan } from './testdata';
import { HomePage } from '../pages/1-home-page';
import { LanguageCurrencyPage } from '../pages/2-language-currency-navigation-page';
import { PlanPage } from '../pages/3-plans-esim-thailand-page';
import { ScanQRCodePage } from '../pages/4-Scan-QR-code-page';

//----- feature: Check if the plan is correct
    // Scenario: Check if the plan is correct
    //
    // Given I’m on page https://www.betterroaming.com/
    // When I Select Euro as currency
    // And Click on Thailand
    // Then Check that the third plan has following values: Country: Thailand, Data: 5GB, Valid: 30 days, Plan type: data only, Price 11,79 €.
    //-----
    //#

test('Given I\'m on page https://www.betterroaming.com/', async ({ page }) => {
    const homepage = new HomePage(page);

    // Given I'm on page https://www.betterroaming.com/
    await homepage.open();
    // I Check if home page is opened
    await homepage.checkIfHomePageIsOpened();
    
  });

  test('When I Select Euro as currency', async ({ page }) => {
     //Select Euro as currency
     await new LanguageCurrencyPage(page).selectCurrency(mobilePlan.currency)
  });

  test('And Click on Thailand', async ({ page }) => {
        // And Click on Thailand
        const homepage = new HomePage(page);
        await homepage.fillAndSelectCountry(mobilePlan.country);
  });

  test('Then Check that the third plan has following values: Country: Thailand, Data: 5GB, Valid: 30 days, Plan type: data only, Price 11,79 €.', async ({ page }) => {
     // Then Check that the third plan has following values: Country: Thailand, Data: 5GB, Valid: 30 days, Plan type: data only, Price 11,79 €.
     await new PlanPage(page).checkPlanValues(mobilePlan.country, mobilePlan.data, mobilePlan.valid, mobilePlan.plan_type, mobilePlan.price);
    
  });
  
  ////////////////////////////
  test('When I select the plan', async ({ page }) => {
   // When I select the plan 
  });

  test('Then ScanQRCode page is opened', async ({ page }) => {
    // Then ScanQRCode page is opened
    const scanQRCodePage = await new ScanQRCodePage(page).CheckTextScanQRcodetogetyourFREEeSIMnowExists();
    expect(scanQRCodePage).toBeTruthy();
  });