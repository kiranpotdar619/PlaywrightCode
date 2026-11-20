import {test,expect} from '@playwright/test';

test('Verify nested iframes',async({page})=>{
    await page.goto("https://selectorshub.com/iframe-scenario/");

    let frame1 = page.frameLocator('#pact1').first();
    let frame2 = frame1.frameLocator('#pact2');
    let frame3 = frame2.frameLocator('#pact3');

    await frame1.locator('#inp_val').first().fill('Kk');
    await frame2.locator('#jex').fill('Sss');
    await frame3.locator('#glaf').fill('Playwright');

    await page.waitForTimeout(3000);

})