import {test,expect} from '@playwright/test';

test('Verify Hover menus',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Wifi').click();

    console.log(await page.getByTestId('hover-output').textContent());
    await page.pause();

});