import { test, expect } from '@playwright/test';

test.describe('Verify Shadow DOM', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.htmlelements.com/demos/tooltip/shadow-dom/?utm_source=chatgpt.com");
    });

    test('Verify Shadow_DOM', async ({ page }) => {
        const button = page.locator('.theme-open-button__chevron').first();
        await button.click();
        await page.locator('[data-color="green"]').click();
        await page.locator('#applyBtn').click();
       
        const smartBtn = page.locator('[ref="button"]');
       // console.log(await smartBtn.innerText());
       await smartBtn.click();
       // await smartBtn.getByRole('button',{name:'BUTTON'}).click();
        await page.pause();
    });
});