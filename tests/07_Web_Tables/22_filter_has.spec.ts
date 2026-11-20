import {test,expect} from '@playwright/test';

test('Verify css psuedo class',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    //Normal way
    // await page.locator("//td[text()='Neha.Patel']/preceding-sibling::td/input").click();
    

    await page.locator('tr:has(td:text("Rohan.Mehta"))').locator('input').first().click();
     await page.waitForTimeout(3000);

});