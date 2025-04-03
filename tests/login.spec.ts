import { test, expect } from '@playwright/test';

import { mobilePlan } from './testdata';
import { HomePage } from '../pages/1-home-page';
import { LanguageCurrencyPage } from '../pages/2-language-currency-navigation-page';
import { PlanPage } from '../pages/3-plans-esim-thailand-page';
import { ScanQRCodePage } from '../pages/4-Scan-QR-code-page';

test('User can login and logout', async ({ page }) => {
    const homepage = new HomePage(page);
    
    await homepage.open();
    await homepage.goToLoginPage();
    await new LanguageCurrencyPage(page).login(user.email, user.password)

    const userIsLoggedIn = await homepage.userIsLoggedIn();
    expect(userIsLoggedIn).toBeTruthy();

    await homepage.goToSettings();
    await new PlanPage(page).logout();

    const userIsLoggedOut = await new ScanQRCodePage(page).userIsLoggedOut();
    expect(userIsLoggedOut).toBeTruthy();
  });
