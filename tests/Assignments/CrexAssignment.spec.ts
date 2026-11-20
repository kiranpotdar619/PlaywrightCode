import { test, expect } from '@playwright/test';

test('verify crex scorecard', async ({ page }) => {

    await page.goto('https://crex.com/');

    const matches = page.locator('.match-card-wrapper');
    //console.log(await matches.allTextContents());

    await matches.first().click();
    await page.locator('.tab-link').nth(2).click();

    //------------//
    console.log(await page.locator('.bowler-table').first().textContent());
    const batting = page.locator('.bowler-table');

    const nextpath ="//table[@class='bowler-table'][1]";
    const fullPath=`${batting}${nextpath}`;
    console.log(await page.locator(nextpath).allTextContents());
    await page.pause();
}); 



//(//table[@class='bowler-table'])[1]/tbody/tr/td