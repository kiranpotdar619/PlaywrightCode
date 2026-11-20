import {test,expect} from '@playwright/test';

test('Verify Right click',async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');

    await page.getByTestId('ctx-target').first().click({button:'right'});

    await page.locator('[data-action="cut"]').click();

    console.log(await page.getByTestId('ctx-output').textContent());
    await page.pause();
});