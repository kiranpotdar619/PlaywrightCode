import {test,expect} from '@playwright/test';

test('Verify Custom DropDown Select',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    await page.locator('#lang-trigger').click();
    await page.getByRole('option',{name:'JavaScript'}).click();


    await page.locator('#experience-trigger').click();
    await page.getByRole('option',{name:'Junior (0-3 years)',exact:true}).click();

    await page.waitForTimeout(4000);
});

