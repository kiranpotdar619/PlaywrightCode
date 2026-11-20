import {test,expect} from '@playwright/test';

test('Verify Custom DropDown Select',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

    //① Single — searchable
    await page.locator('#rs-single').first().click();
    await page.getByRole('option',{name:'Cypress',exact:true}).click();

    //② Multi — chips with remove
    await page.locator('#rs-multi').click();
    await page.getByRole('option',{name:'Mocha',exact:true}).click();
    await page.getByRole('option',{name:'Cucumber'}).click();
   // await page.keyboard.press('Escape');

    //⑤ Async — fetched on type
    await page.locator('#rs-async').click();
    await page.getByTestId('rs-async-input').fill('pun')
    
    await expect(page.getByTestId('rs-async-menu')).toHaveText('Pune');

    await page.getByRole('option',{name:'Pune'}).click();

    await page.waitForTimeout(4000);
});

